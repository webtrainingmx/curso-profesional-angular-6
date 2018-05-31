import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-single-vehicle',
  templateUrl: './single-vehicle.component.html',
  styleUrls: ['./single-vehicle.component.scss']
})
export class SingleVehicleComponent implements OnInit {

  @Input() vehicle: Vehicle;
  @Output() changeVehicle = new EventEmitter<Vehicle>();

  constructor() {
  }

  ngOnInit() {
  }

  rentVehicle(vehicle) {
    console.log('Rent', vehicle);
    this.changeVehicle.emit(vehicle);
  }

}
