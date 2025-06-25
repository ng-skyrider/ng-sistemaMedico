import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-follow-up-consultation',
  imports: [CommonModule, FormsModule],
  templateUrl: './follow-up-consultation.component.html',
  styleUrls: ['./../histories-clinic/histories-clinic.component.scss','./follow-up-consultation.component.scss']
})
export class FollowUpConsultationComponent {
  // Header section
  fecha: string = '';
  hora: string = '';
  edad: string = '';
  motivoConsulta: string = '';

  // Subjective symptoms / Anamnesis
  tiempoEnfermedad: string = '';
  formaInicio: string = '';
  estadoAnimo: string = '';
  sed: string = '';
  deposiciones: string = '';
  anamnesisSueno: string = '';
  apetito: string = '';
  orina: string = '';

  // Specific symptoms/history
  fiebreUltimos15Dias: string = '';
  tosMas15Dias: string = '';
  secrecionLesionGenitales: string = '';
  fechaUltimaRegla: string = '';

  // Violence screening
  tamizajeViolenciaObservacion: string = ''; // For observations related to the screening question

  // Physical Exam
  temperatura: string = '';
  pa: string = '';
  fc: string = '';
  fr: string = '';
  peso: string = '';
  talla: string = '';
  imc: string = '';
  examenFisicoHallazgos: { finding: string }[] = [{ finding: '' }, { finding: '' }, { finding: '' }];

  // Diagnosis
  diagnosticoEnfermedadSindrome: string = '';
  diagnosticoNutricional: string = '';
  diagnosticoDesarrolloPsicosocial: string = '';
  diagnosticoOtros: string = '';

  // Treatment
  tratamientoItems: { item: string }[] = [{ item: '' }, { item: '' }, { item: '' }];

  // Auxiliary Exams
  examenesAuxiliaresItems: { item: string }[] = [{ item: '' }, { item: '' }];

  // Referral
  referenciaMotivo: string = ''; // Combines fecha, lugar y motivo as per image layout

  // Follow-up plan
  proximaCita: string = '';
  atendidoPor: string = '';
  observacion: string = '';
  // firmaSelloProfesional is typically a space for a physical signature

  // Bottom patient identification (as seen at the very end of the full form image)
  apellidosNombres: string = '';
  nroFormatoBottom: string = ''; // The "N°" at the bottom right

  constructor() {
    // Initialize arrays if needed, e.g. for dynamic rows
    // For now, they are initialized with a few empty entries directly.
  }

  // Placeholder methods for dynamic row management (can be implemented later if needed)
  addExamenFisicoHallazgoRow(): void {
    this.examenFisicoHallazgos.push({ finding: '' });
  }
  removeExamenFisicoHallazgoRow(index: number): void {
    this.examenFisicoHallazgos.splice(index, 1);
  }

  addTratamientoItemRow(): void {
    this.tratamientoItems.push({ item: '' });
  }
  removeTratamientoItemRow(index: number): void {
    this.tratamientoItems.splice(index, 1);
  }

  addExamenAuxiliarItemRow(): void {
    this.examenesAuxiliaresItems.push({ item: '' });
  }
  removeExamenAuxiliarItemRow(index: number): void {
    this.examenesAuxiliaresItems.splice(index, 1);
  }
}
