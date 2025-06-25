import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-risk-factors-monitoring',
  imports: [CommonModule, FormsModule],
  templateUrl: './risk-factors-monitoring.component.html',
  styleUrls: ['./../histories-clinic/histories-clinic.component.scss','./risk-factors-monitoring.component.scss']
})
export class RiskFactorsMonitoringComponent {
  // Data for the table sections
  evaluacionNutricional = [
    { item: 'Perímetro abdominal', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Talla / Edad', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Índice de Masa Corporal (IMC)', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Alimentación', valor1: '', valor2: '', valor3: '', valor4: '' }
  ];

  desarrolloSexual = [
    { item: 'Desarrollo de la mama', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Desarrollo del pene', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Desarrollo del vello pubiano', valor1: '', valor2: '', valor3: '', valor4: '' }
  ];

  evaluacionPostural = [
    { item: 'Columna', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Rodilla', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Pie', valor1: '', valor2: '', valor3: '', valor4: '' }
  ];

  agudezaVisualAuditiva = [
    { item: 'Agudeza visual OD', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Agudeza visual OI', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Agudeza auditiva OD', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Agudeza auditiva OI', valor1: '', valor2: '', valor3: '', valor4: '' }
  ];

  descarteEnfermedades = [
    { item: 'Determinación de Hema+tocrito', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Dosaje de Colesterol y Triglicéridos', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Dosaje de Glucosa', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Examen de orina completo (determinación de proteína en orina)', valor1: '', valor2: '', valor3: '', valor4: '' }
  ];

  habilidadesSociales = [
    { item: 'Previniendo la violencia', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Comunicación', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Control de ira', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Autoestima', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Toma de decisiones', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Valores', valor1: '', valor2: '', valor3: '', valor4: '' },
    { item: 'Calificación total', valor1: '', valor2: '', valor3: '', valor4: '' }
  ];

  apellidosNombres: string = '';
  nroFormato: string = '';

  // Date fields for each section
  evaluacionNutricionalFecha1: string = '';
  evaluacionNutricionalFecha2: string = '';
  evaluacionNutricionalFecha3: string = '';
  evaluacionNutricionalFecha4: string = '';

  desarrolloSexualFecha1: string = '';
  desarrolloSexualFecha2: string = '';
  desarrolloSexualFecha3: string = '';
  desarrolloSexualFecha4: string = '';

  evaluacionPosturalFecha1: string = '';
  evaluacionPosturalFecha2: string = '';
  evaluacionPosturalFecha3: string = '';
  evaluacionPosturalFecha4: string = '';

  agudezaVisualAuditivaFecha1: string = '';
  agudezaVisualAuditivaFecha2: string = '';
  agudezaVisualAuditivaFecha3: string = '';
  agudezaVisualAuditivaFecha4: string = '';

  descarteEnfermedadesFecha1: string = '';
  descarteEnfermedadesFecha2: string = '';
  descarteEnfermedadesFecha3: string = '';
  descarteEnfermedadesFecha4: string = '';

  habilidadesSocialesFecha1: string = '';
  habilidadesSocialesFecha2: string = '';
  habilidadesSocialesFecha3: string = '';
  habilidadesSocialesFecha4: string = '';

}
