import { Component, OnInit } from '@angular/core';
import { VehiclesService } from './services/vehicles.service';
import { Vehicle } from './models/vehicle.model';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Array<Vehicle>;
  searchText: string;
  filterByFields = ['model'];

  constructor(public _vehiclesService: VehiclesService) {
  }

  ngOnInit() {
    this._vehiclesService.getVehicles().subscribe(
      vehicles => this.vehicles = vehicles,
      error => console.error(error)
    );
  }

}
