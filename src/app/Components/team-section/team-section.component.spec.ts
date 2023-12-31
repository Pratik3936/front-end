import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSectionComponent } from './team-section.component';

describe('TeamSectionComponent', () => {
  let component: TeamSectionComponent;
  let fixture: ComponentFixture<TeamSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamSectionComponent]
    });
    fixture = TestBed.createComponent(TeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
