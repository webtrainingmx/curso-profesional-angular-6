import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VehiclesService } from '../services/vehicles.service';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;

  constructor(
    private _route: ActivatedRoute,
    private _vehiclesService: VehiclesService,
    private _location: Location) {
  }

  ngOnInit() {
    this.getVehicle();
  }

  getVehicle() {
    // Get the "id" from the route
    const id = parseInt(this._route.snapshot.paramMap.get('id'), 10);
    this.vehicle = this._vehiclesService.getVehicle(id);
  }

  goBack() {
    this._location.back();
  }

}
