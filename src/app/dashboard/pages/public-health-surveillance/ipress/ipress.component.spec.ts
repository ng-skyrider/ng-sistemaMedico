import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IpressComponent } from './ipress.component';

describe('IpressComponent', () => {
  let component: IpressComponent;
  let fixture: ComponentFixture<IpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpressComponent, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with required fields', () => {
    expect(component.ipressForm.get('ipress')).toBeTruthy();
    expect(component.ipressForm.get('sala')).toBeTruthy();
    expect(component.ipressForm.get('servicio')).toBeTruthy();
    expect(component.ipressForm.get('totalPacientesHospitalizados')).toBeTruthy();
    expect(component.ipressForm.get('mes')).toBeTruthy();
    expect(component.ipressForm.get('anio')).toBeTruthy();
    expect(component.ipressForm.get('pacientes')).toBeTruthy();
  });

  it('should add patient to form array', () => {
    const initialLength = component.pacientesFormArray.length;
    component.agregarPaciente();
    expect(component.pacientesFormArray.length).toBe(initialLength + 1);
  });

  it('should remove patient from form array', () => {
    component.agregarPaciente();
    component.agregarPaciente();
    const initialLength = component.pacientesFormArray.length;
    component.eliminarPaciente(0);
    expect(component.pacientesFormArray.length).toBe(initialLength - 1);
  });

  it('should calculate total general correctly', () => {
    component.agregarPaciente();
    component.agregarPaciente();
    
    // Simular valores de total días
    component.pacientesFormArray.at(0).get('totalDiasDispositivo')?.setValue(5);
    component.pacientesFormArray.at(1).get('totalDiasDispositivo')?.setValue(10);
    
    expect(component.calcularTotalGeneral()).toBe(15);
  });

  it('should clear form correctly', () => {
    component.agregarPaciente();
    component.ipressForm.get('ipress')?.setValue('Test Hospital');
    
    component.limpiarFormulario();
    
    expect(component.pacientesFormArray.length).toBe(0);
    expect(component.ipressForm.get('ipress')?.value).toBeFalsy();
  });
});
