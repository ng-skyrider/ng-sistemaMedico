import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ReniecConnectService, ReniecResponse } from '../../../../services/reniec-connect.service';
import { NotifyComponent, NotifyType } from '../../../../components/notify/notify.component';
import { LoadingComponent } from '../../../../components/loading/loading.component';

@Component({
  selector: 'app-patient-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NotifyComponent,
    LoadingComponent
  ],
  templateUrl: './patient-register.component.html',
  styleUrls: ['./../../personal-salud/consolidado-informacion-relacionada/consolidado-informacion-relacionada.component.scss','./../../user/registrar-usuarios/registrar-usuarios.component.scss', './patient-register.component.scss']
})
export class PatientRegisterComponent {
  private reniecService = inject(ReniecConnectService);
  
  registroForm: FormGroup;

  // Tab control
  activeTab: 'form' | 'preview' = 'form';

  // Filter control
  filterOpen = false;

  // Loading and notification states
  isLoading = signal(false);
  showNotification = signal(false);
  notificationMessage = signal('');
  notificationType = signal<NotifyType>('danger');

  selectTab(tab: 'form' | 'preview') {
    this.activeTab = tab;
  }

  // Filter fields
  searchNumeroDocumento = '';
  searchNombres = '';
  searchApellidos = '';
  searchTelefono = '';
  searchEmail = '';

  pacientes = [
    { tipo_documento: 'DNI', numero_documento: '12345678', nombres: 'Juan', apellido_paterno: 'Perez', apellido_materno: 'Gomez', fecha_nacimiento: '1990-01-01', sexo: 'M', direccion: 'Av. Siempre Viva 123', telefono: '987654321', email: 'juan@example.com' },
    { tipo_documento: 'DNI', numero_documento: '87654321', nombres: 'Maria', apellido_paterno: 'Gomez', apellido_materno: 'Perez', fecha_nacimiento: '1995-05-15', sexo: 'F', direccion: 'Calle Falsa 123', telefono: '123456789', email: 'maria@example.com' },
    { tipo_documento: 'DNI', numero_documento: '45678912', nombres: 'Pedro', apellido_paterno: 'Lopez', apellido_materno: 'Garcia', fecha_nacimiento: '1988-11-20', sexo: 'M', direccion: 'Calle Real 456', telefono: '987654321', email: 'pedro@example.com' },
    { tipo_documento: 'DNI', numero_documento: '98765432', nombres: 'Ana', apellido_paterno: 'Martinez', apellido_materno: 'Lopez', fecha_nacimiento: '1992-07-10', sexo: 'F', direccion: 'Calle de la Paz 789', telefono: '123456789', email: 'ana@example.com' },
    { tipo_documento: 'DNI', numero_documento: '32165498', nombres: 'Luis', apellido_paterno: 'Garcia', apellido_materno: 'Martinez', fecha_nacimiento: '1985-03-15', sexo: 'M', direccion: 'Calle del Sol 101', telefono: '987654321', email: 'luis@example.com' },
    { tipo_documento: 'DNI', numero_documento: '65432178', nombres: 'Elena', apellido_paterno: 'Lopez', apellido_materno: 'Garcia', fecha_nacimiento: '1998-09-25', sexo: 'F', direccion: 'Calle del Bosque 202', telefono: '123456789', email: 'elena@example.com' },
    { tipo_documento: 'DNI', numero_documento: '89765432', nombres: 'Carlos', apellido_paterno: 'Garcia', apellido_materno: 'Lopez', fecha_nacimiento: '1980-12-05', sexo: 'M', direccion: 'Calle del Mar 303', telefono: '987654321', email: 'carlos@example.com' },
  ];

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      tipo_documento: ['DNI', Validators.required],
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

  async buscarPorDNI() {
    const dni = this.registroForm.get('numero_documento')?.value;
    
    if (!dni || dni.length !== 8) {
      this.showNotification.set(true);
      this.notificationMessage.set('El DNI debe tener 8 dígitos');
      this.notificationType.set('alert');
      return;
    }

    this.isLoading.set(true);
    
    try {
      const response = await firstValueFrom(this.reniecService.buscarPorDNI(dni));
      
      if (response) {
        // Llenar el formulario con los datos de RENIEC
        this.registroForm.patchValue({
          nombres: response.nombres,
          apellido_paterno: response.apellidoPaterno,
          apellido_materno: response.apellidoMaterno,
          direccion: response.direccion || ''
        });

        this.showNotification.set(true);
        this.notificationMessage.set(`Datos encontrados: ${response.nombres} ${response.apellidoPaterno} ${response.apellidoMaterno}`);
        this.notificationType.set('success');
      }
    } catch (error) {
      console.error('Error al buscar DNI:', error);
      this.showNotification.set(true);
      this.notificationMessage.set('Error al buscar el DNI. Verifique que el número sea correcto.');
      this.notificationType.set('danger');
    } finally {
      this.isLoading.set(false);
    }
  }

  // Método para mostrar DNIs de prueba disponibles
  mostrarDNIsPrueba() {
    const dnisPrueba = this.reniecService.getMockDNIs();
    this.showNotification.set(true);
    this.notificationMessage.set(`DNIs de prueba disponibles: ${dnisPrueba.join(', ')}`);
    this.notificationType.set('alert');
  }

  onNotificationClose() {
    this.showNotification.set(false);
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

  get filteredPatients(){
    return this.pacientes.filter(u =>
      (!this.searchNumeroDocumento || u.numero_documento.toLowerCase().includes(this.searchNumeroDocumento.toLowerCase())) &&
      (!this.searchNombres || u.nombres.toLowerCase().includes(this.searchNombres.toLowerCase())) &&
      (!this.searchApellidos || u.apellido_paterno.toLowerCase().includes(this.searchApellidos.toLowerCase())) &&
      (!this.searchTelefono || u.telefono.toLowerCase().includes(this.searchTelefono.toLowerCase())) &&
      (!this.searchEmail || u.email.toLowerCase().includes(this.searchEmail.toLowerCase()))
    );
  }
}
