import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-single-vehicle',
  templateUrl: './single-vehicle.component.html',
  styleUrls: ['./single-vehicle.component.scss']
})
export class SingleVehicleComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Input() isMyVehicle = false;
  @Output() rentOneVehicle = new EventEmitter<Vehicle>();
  @Output() cancelOneVehicle = new EventEmitter<Vehicle>();

  constructor() {
  }

  ngOnInit() {
  }

  rentVehicle(vehicle) {
    console.log('Rent', vehicle);
    this.rentOneVehicle.emit(vehicle);
  }

  cancelVehicle(vehicle) {
    console.log('Cancel', vehicle);
    this.cancelOneVehicle.emit(vehicle);
  }

}
