import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotifyComponent, NotifyType } from '../../../../components/notify/notify.component';
import { LoadingComponent } from '../../../../components/loading/loading.component';

interface PacienteFormData {
  numeroCama: number;
  historiaClinica: string;
  apellidosNombres: string;
  sexo: string;
  fechaIngreso: string;
  edadPesoRN: string;
  diagnosticoIngreso: string;
  dispositivosMedicos: string[];
  seguimientoDiario: boolean[];
  totalDiasDispositivo: number;
  observaciones: string;
}

@Component({
  selector: 'app-ipress',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NotifyComponent,
    LoadingComponent
  ],
  templateUrl: './ipress.component.html',
  styleUrls: ['./ipress.component.scss']
})
export class IpressComponent {

  ipressForm!: FormGroup;

  // Estados de la aplicación
  isLoading = signal(false);
  showNotification = signal(false);
  notificationMessage = signal('');
  notificationType = signal<NotifyType>('danger');

  // Opciones para los selects
  meses = [
    { value: 1, label: 'Enero' },
    { value: 2, label: 'Febrero' },
    { value: 3, label: 'Marzo' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Mayo' },
    { value: 6, label: 'Junio' },
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
    { value: 10, label: 'Octubre' },
    { value: 11, label: 'Noviembre' },
    { value: 12, label: 'Diciembre' }
  ];

  anios: number[] = [];
  
  dispositivosMedicos = [
    { value: 'VM', label: 'Ventilación Mecánica (VM)' },
    { value: 'CVC', label: 'Catéter Venoso Central (CVC)' },
    { value: 'SVD', label: 'Sonda Vesical Permanente (SVD)' },
    { value: 'otros', label: 'Otros' }
  ];

  diasDelMes = Array.from({ length: 31 }, (_, i) => i + 1);

  constructor(private fb: FormBuilder) {
    this.initializeYears();
    this.initializeForm();
  }

  private initializeYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= currentYear - 10; year--) {
      this.anios.push(year);
    }
  }

  private initializeForm() {
    this.ipressForm = this.fb.group({
      // Datos de la institución
      ipress: ['', Validators.required],
      sala: ['', Validators.required],
      servicio: ['', Validators.required],
      totalPacientesHospitalizados: [0, [Validators.required, Validators.min(0)]],
      mes: ['', Validators.required],
      anio: [new Date().getFullYear(), Validators.required],
      
      // Array de pacientes
      pacientes: this.fb.array([])
    });
  }

  get pacientesFormArray(): FormArray {
    return this.ipressForm.get('pacientes') as FormArray;
  }

  agregarPaciente() {
    const pacienteForm = this.fb.group({
      numeroCama: ['', [Validators.required, Validators.min(1)]],
      historiaClinica: ['', Validators.required],
      apellidosNombres: ['', Validators.required],
      sexo: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      edadPesoRN: ['', Validators.required],
      diagnosticoIngreso: ['', Validators.required],
      dispositivosMedicos: this.fb.array([]),
      seguimientoDiario: this.fb.array(this.diasDelMes.map(() => false)),
      totalDiasDispositivo: [{ value: 0, disabled: true }],
      observaciones: ['']
    });

    // Escuchar cambios en el seguimiento diario para calcular el total
    pacienteForm.get('seguimientoDiario')?.valueChanges.subscribe(() => {
      this.calcularTotalDiasDispositivo(pacienteForm);
    });

    this.pacientesFormArray.push(pacienteForm);
  }

  eliminarPaciente(index: number) {
    this.pacientesFormArray.removeAt(index);
  }

  getDispositivosMedicosFormArray(pacienteIndex: number): FormArray {
    return this.pacientesFormArray.at(pacienteIndex).get('dispositivosMedicos') as FormArray;
  }

  getSeguimientoDiarioFormArray(pacienteIndex: number): FormArray {
    return this.pacientesFormArray.at(pacienteIndex).get('seguimientoDiario') as FormArray;
  }

  onDispositivoChange(pacienteIndex: number, dispositivo: string, event: any) {
    const dispositivosArray = this.getDispositivosMedicosFormArray(pacienteIndex);
    
    if (event.target.checked) {
      dispositivosArray.push(this.fb.control(dispositivo));
    } else {
      const index = dispositivosArray.value.indexOf(dispositivo);
      if (index > -1) {
        dispositivosArray.removeAt(index);
      }
    }
  }

  isDispositivoSelected(pacienteIndex: number, dispositivo: string): boolean {
    const dispositivosArray = this.getDispositivosMedicosFormArray(pacienteIndex);
    return dispositivosArray.value.includes(dispositivo);
  }

  onSeguimientoChange(pacienteIndex: number, diaIndex: number, event: any) {
    const seguimientoArray = this.getSeguimientoDiarioFormArray(pacienteIndex);
    seguimientoArray.at(diaIndex).setValue(event.target.checked);
  }

  calcularTotalDiasDispositivo(pacienteForm: FormGroup) {
    const seguimientoDiario = pacienteForm.get('seguimientoDiario')?.value || [];
    const totalDias = seguimientoDiario.filter((dia: boolean) => dia).length;
    pacienteForm.get('totalDiasDispositivo')?.setValue(totalDias);
  }

  calcularTotalGeneral(): number {
    let total = 0;
    for (let i = 0; i < this.pacientesFormArray.length; i++) {
      const paciente = this.pacientesFormArray.at(i);
      total += paciente.get('totalDiasDispositivo')?.value || 0;
    }
    return total;
  }

  onSubmit() {
    if (this.ipressForm.valid) {
      this.isLoading.set(true);
      
      // Simular envío del formulario
      setTimeout(() => {
        console.log('Formulario enviado:', this.ipressForm.value);
        this.showNotification.set(true);
        this.notificationMessage.set('Formulario de vigilancia epidemiológica enviado exitosamente');
        this.notificationType.set('success');
        this.isLoading.set(false);
      }, 2000);
    } else {
      this.showNotification.set(true);
      this.notificationMessage.set('Por favor complete todos los campos obligatorios');
      this.notificationType.set('alert');
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.ipressForm.controls).forEach(key => {
      const control = this.ipressForm.get(key);
      control?.markAsTouched();

      if (control instanceof FormArray) {
        control.controls.forEach(subControl => {
          if (subControl instanceof FormGroup) {
            Object.keys(subControl.controls).forEach(subKey => {
              subControl.get(subKey)?.markAsTouched();
            });
          }
        });
      }
    });
  }

  onNotificationClose() {
    this.showNotification.set(false);
  }

  limpiarFormulario() {
    this.ipressForm.reset();
    this.pacientesFormArray.clear();
    this.ipressForm.patchValue({ anio: new Date().getFullYear() });
  }
}
