import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriesClinicExportComponent } from './histories-clinic-export.component';

describe('HistoriesClinicExportComponent', () => {
  let component: HistoriesClinicExportComponent;
  let fixture: ComponentFixture<HistoriesClinicExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriesClinicExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriesClinicExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
