import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidadoInformacionRelacionadaComponent } from './consolidado-informacion-relacionada.component';

describe('ConsolidadoInformacionRelacionadaComponent', () => {
  let component: ConsolidadoInformacionRelacionadaComponent;
  let fixture: ComponentFixture<ConsolidadoInformacionRelacionadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolidadoInformacionRelacionadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolidadoInformacionRelacionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
