import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigoAgentComponent } from './figo-agent.component';

describe('FigoAgentComponent', () => {
  let component: FigoAgentComponent;
  let fixture: ComponentFixture<FigoAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigoAgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigoAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
