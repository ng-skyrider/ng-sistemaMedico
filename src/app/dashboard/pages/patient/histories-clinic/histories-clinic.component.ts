import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-histories-clinic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './histories-clinic.component.html',
  styleUrls: ['./histories-clinic.component.scss']
})
export class HistoriesClinicComponent {
  activeTab: string = 'tab1'; // Default to tab1: Listado de problemas y plan de atención Integral

  // Data for PROBLEMA CRÓNICOS table
  chronicProblems: any[] = [];
  // Data for PROBLEMAS AGUDOS table
  acuteProblems: any[] = [];
  // Data for PLAN DE ATENCIÓN INTEGRAL table
  attentionPlanItems: any[] = [];

  constructor() {
    // Initialize with a few empty rows for chronic problems
    for (let i = 0; i < 3; i++) { // Start with 3 rows, for example
      this.addChronicProblemRow(false); // Don't assign a new number initially for pre-filled rows
    }
    this.renumberChronicProblems(); // Assign numbers after initial population

    // Initialize with a few empty rows for acute problems
    for (let i = 0; i < 3; i++) { // Start with 3 rows
      this.addAcuteProblemRow(false);
    }
    this.renumberAcuteProblems();

    // Initialize Plan de Atención Integral
    this.initializeAttentionPlan();
  }

  selectTab(tabId: string): void {
    this.activeTab = tabId;
  }

  // --- PROBLEMA CRÓNICOS --- 
  addChronicProblemRow(renumber: boolean = true): void {
    const newProblem = {
      numero: this.chronicProblems.length + 1, // Temporary number, will be re-assigned if renumber is true
      fecha: '',
      problema: '',
      inactivo: false,
      observacion: ''
    };
    this.chronicProblems.push(newProblem);
    if (renumber) {
      this.renumberChronicProblems();
    }
  }

  renumberChronicProblems(): void {
    this.chronicProblems.forEach((problem, index) => {
      problem.numero = index + 1;
    });
  }

  removeChronicProblemRow(index: number): void {
    if (this.chronicProblems.length > 1) { // Prevent removing the last row
      this.chronicProblems.splice(index, 1);
      this.renumberChronicProblems();
    }
  }

  // --- PROBLEMAS AGUDOS --- 
  addAcuteProblemRow(renumber: boolean = true): void {
    const newProblem = {
      numero: this.acuteProblems.length + 1,
      problema: '',
      fecha1: '',
      fecha2: '',
      fecha3: '',
      observacion: ''
    };
    this.acuteProblems.push(newProblem);
    if (renumber) {
      this.renumberAcuteProblems();
    }
  }

  renumberAcuteProblems(): void {
    this.acuteProblems.forEach((problem, index) => {
      problem.numero = index + 1;
    });
  }

  removeAcuteProblemRow(index: number): void {
    if (this.acuteProblems.length > 1) { // Prevent removing the last row
      this.acuteProblems.splice(index, 1);
      this.renumberAcuteProblems();
    }
  }

  // --- PLAN DE ATENCIÓN INTEGRAL --- 
  initializeAttentionPlan(): void {
    const plan = [
      "EVALUACION GENERAL, CRECIMIENTO Y DESARROLLO",
      "INMUNIZACIONES",
      "EVALUACIÓN BUCAL",
      "INTERVENCIONES PREVENTIVAS",
      "ADMINISTRACION DE MICRONUTRIENTES",
      "CONSEJERIA INTEGRAL",
      "VISITA DOMICILIARIA",
      "TEMAS EDUCATIVOS",
      "ATENCION DE PRIORIDADES SANITARIAS"
    ];

    this.attentionPlanItems = plan.map((plan, index) => ({
      planNumber: index + 1,
      plan: plan,
      descripcion: '',
      fecha1_dia: '', fecha1_mes: '', fecha1_ano: '',
      lugar: ''
    }));
  }
}
