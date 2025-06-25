import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriesClinicComponent } from './histories-clinic.component';

describe('HistoriesClinicComponent', () => {
  let component: HistoriesClinicComponent;
  let fixture: ComponentFixture<HistoriesClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriesClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriesClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
