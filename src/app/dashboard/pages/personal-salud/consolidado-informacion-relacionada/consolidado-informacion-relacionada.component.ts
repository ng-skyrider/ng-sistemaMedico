import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consolidado-informacion-relacionada',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consolidado-informacion-relacionada.component.html',
  styleUrls: ['./consolidado-informacion-relacionada.component.scss']
})
export class ConsolidadoInformacionRelacionadaComponent implements OnInit, OnDestroy {
  activeTab: string = 'form';
  form: FormGroup;
  private formChangesSubscription!: Subscription;

  tableData = {
    ano: new Date().getFullYear().toString(),
    estudiante: '0',
    interno: '0',
    residente: '0',
    nombrado: '0',
    contratado: '0',
    otro: '0',
    get total() {
      return (
        Number(this.estudiante) +
        Number(this.interno) +
        Number(this.residente) +
        Number(this.nombrado) +
        Number(this.contratado) +
        Number(this.otro)
      );
    }
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      ano: [this.tableData.ano, Validators.required],
      estudiante: [this.tableData.estudiante, [Validators.required, Validators.pattern('^[0-9]*$')]],
      interno: [this.tableData.interno, [Validators.required, Validators.pattern('^[0-9]*$')]],
      residente: [this.tableData.residente, [Validators.required, Validators.pattern('^[0-9]*$')]],
      nombrado: [this.tableData.nombrado, [Validators.required, Validators.pattern('^[0-9]*$')]],
      contratado: [this.tableData.contratado, [Validators.required, Validators.pattern('^[0-9]*$')]],
      otro: [this.tableData.otro, [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  ngOnInit(): void {
    this.formChangesSubscription = this.form.valueChanges.subscribe(values => {
      this.tableData.ano = values.ano || this.tableData.ano;
      this.tableData.estudiante = values.estudiante || '0';
      this.tableData.interno = values.interno || '0';
      this.tableData.residente = values.residente || '0';
      this.tableData.nombrado = values.nombrado || '0';
      this.tableData.contratado = values.contratado || '0';
      this.tableData.otro = values.otro || '0';
    });
  }

  ngOnDestroy(): void {
    if (this.formChangesSubscription) {
      this.formChangesSubscription.unsubscribe();
    }
  }

  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}
