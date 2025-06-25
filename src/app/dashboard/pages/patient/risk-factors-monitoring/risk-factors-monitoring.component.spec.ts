import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskFactorsMonitoringComponent } from './risk-factors-monitoring.component';

describe('RiskFactorsMonitoringComponent', () => {
  let component: RiskFactorsMonitoringComponent;
  let fixture: ComponentFixture<RiskFactorsMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskFactorsMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskFactorsMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
