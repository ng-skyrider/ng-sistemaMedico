import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-registrar-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./../../personal-salud/consolidado-informacion-relacionada/consolidado-informacion-relacionada.component.scss','./registrar-usuarios.component.scss']
})
export class RegistrarUsuariosComponent {
  registroForm: FormGroup;

  // Tab control
  activeTab: 'form' | 'preview' = 'form';

  // Filter control
  filterOpen = false;

  selectTab(tab: 'form' | 'preview') {
    this.activeTab = tab;
  }

  // Dummy user list (replace with API call)
  usuarios = [
    { nombre: 'Juan Perez', email: 'juan@example.com', role: 'ADMIN_ROLE' },
    { nombre: 'Maria Gomez', email: 'maria@example.com', role: 'USER_ROLE' },
    { nombre: 'Dr. House', email: 'house@example.com', role: 'DOCTOR_ROLE' }
  ];

  // Filter fields
  searchNombre = '';
  searchEmail = '';
  searchRole = '';

  authS = inject(AuthService);

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]]
    });
  }

  // Computed filtered list
  get filteredUsuarios() {
    return this.usuarios.filter(u =>
      (!this.searchNombre || u.nombre.toLowerCase().includes(this.searchNombre.toLowerCase())) &&
      (!this.searchEmail || u.email.toLowerCase().includes(this.searchEmail.toLowerCase())) &&
      (!this.searchRole || u.role === this.searchRole)
    );
  }

  // Returns css badge class based on role
  roleBadge(role: string): string {
    switch (role) {
      case 'ADMIN_ROLE':
        return 'badge admin';
      case 'USER_ROLE':
        return 'badge user';
      case 'DOCTOR_ROLE':
        return 'badge doctor';
      case 'ENFERMERA_ROLE':
        return 'badge enfermera';
      default:
        return 'badge';
    }
  }

  async registrarUsuario(): Promise<void> {
    if (this.registroForm.valid) {
      try {
        const res = await this.authS.onRegister(this.registroForm.value.email, this.registroForm.value.password);

        if (res && res.user && !res.session) {
          // User created but needs to confirm email
          alert('Registro exitoso. Por favor, revise su correo para confirmar la cuenta.');
          this.registroForm.reset();
        } else if (res && res.session) {
          // This case would happen if email confirmation is disabled
          alert('Usuario registrado y sesión iniciada.');
          this.registroForm.reset();
        } else if (res && res.user && res.user.identities && res.user.identities.length === 0) {
          // This can happen if the user already exists but is not confirmed.
          alert('Este usuario ya existe. Si no ha confirmado su correo, por favor, revise su bandeja de entrada.');
        }

      } catch (error: any) {
        console.error('Error en el registro:', error);
        alert(`Error en el registro: ${error.message}`);
      }
    } else {
      alert('El formulario no es válido. Por favor, complete todos los campos requeridos.');
    }
  }

  onFilterClick(){
    this.filterOpen = !this.filterOpen;
  }
}
