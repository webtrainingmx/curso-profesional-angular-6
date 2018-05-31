import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../../public/vehicles/services/vehicles.service';
import { Vehicle } from '../../public/vehicles/models/vehicle.model';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {

  vehicles: Array<Vehicle>;

  constructor(public _vehiclesService: VehiclesService) {
  }

  ngOnInit() {
    this._vehiclesService.getVehiclesByUsingToken().subscribe(
      vehicles => this.vehicles = vehicles,
      error => console.error(error)
    );
  }

  handleRentedVehicle(event) {
    const vehicle: Vehicle = event;
    console.log('>> handleRentedVehicle() > ', vehicle);

    this.vehicles.push(vehicle);
  }

  handleCancelOneVehicle(event) {
    const vehicle: Vehicle = event;
    console.log('>> handleCancelOneVehicle() > ', vehicle);
    this._vehiclesService.cancelVehicle(vehicle).subscribe(
      (response) => {
        console.log(response);

        // Remove the vehicle
        const vehicleIndex = this.vehicles.findIndex(vehicleItem => vehicleItem.id === vehicle.id);
        this.vehicles.splice(vehicleIndex, 1);
      },
      error => console.error(error),
      () => {
      }
    );

  }

}
