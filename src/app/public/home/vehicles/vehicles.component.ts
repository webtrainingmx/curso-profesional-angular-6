import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: any;

  constructor(public _vehiclesService: VehiclesService) {
  }

  ngOnInit() {
    this.vehicles = this._vehiclesService.getVehicles().data;
  }

}
