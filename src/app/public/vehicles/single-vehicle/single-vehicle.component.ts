import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-single-vehicle',
  templateUrl: './single-vehicle.component.html',
  styleUrls: ['./single-vehicle.component.scss']
})
export class SingleVehicleComponent implements OnInit {

  @Input() vehicle: Vehicle;

  constructor() {
  }

  ngOnInit() {
  }

}
