import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugstableComponent } from './drugstable.component';

describe('DrugstableComponent', () => {
  let component: DrugstableComponent;
  let fixture: ComponentFixture<DrugstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugstableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrugstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
