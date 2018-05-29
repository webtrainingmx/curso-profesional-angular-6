import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVehicleComponent } from './single-vehicle.component';

describe('SingleVehicleComponent', () => {
  let component: SingleVehicleComponent;
  let fixture: ComponentFixture<SingleVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
