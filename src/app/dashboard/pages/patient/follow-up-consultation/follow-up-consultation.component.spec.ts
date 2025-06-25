import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpConsultationComponent } from './follow-up-consultation.component';

describe('FollowUpConsultationComponent', () => {
  let component: FollowUpConsultationComponent;
  let fixture: ComponentFixture<FollowUpConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUpConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUpConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
