import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './patient-register.component.html',
  styleUrls: ['./../../personal-salud/consolidado-informacion-relacionada/consolidado-informacion-relacionada.component.scss','./patient-register.component.scss']
})
export class PatientRegisterComponent {
  registroForm: FormGroup;

  // Tab control
  activeTab: 'form' | 'preview' = 'form';

  // Filter control
  filterOpen = false;

  selectTab(tab: 'form' | 'preview') {
    this.activeTab = tab;
  }

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      tipo_documento: ['', Validators.required],
      numero_documento: ['', Validators.required],
      nombres: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      direccion: [''],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  registrarPaciente(){
    if (this.registroForm.valid) {
      console.log('Formulario válido:', this.registroForm.value);
      // Aquí iría la lógica para guardar el paciente en la base de datos
    } else {
      console.log('Formulario no válido');
    }
  }

  onFilterClick(){
    this.filterOpen = !this.filterOpen;
  }
}
