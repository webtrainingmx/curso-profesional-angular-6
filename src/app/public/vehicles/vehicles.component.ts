import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { VehiclesService } from './services/vehicles.service';
import { Vehicle } from './models/vehicle.model';
import { AuthenticationService } from '../../common/services/authentication.service';
import { ToggleModalService } from '../../common/services/toggle-modal.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehiclesComponent implements OnInit {

  vehicles: Array<Vehicle>;
  searchText: string;
  filterByFields = ['model'];

  @Output() rentedVehicle = new EventEmitter<Vehicle>();

  constructor(
    public _vehiclesService: VehiclesService,
    public _authService: AuthenticationService,
    public _toggleModalLoginService: ToggleModalService) {
  }

  ngOnInit() {
    this._vehiclesService.getVehicles().subscribe(
      vehicles => this.vehicles = vehicles,
      error => console.error(error)
    );
  }

  handleRentOneVehicle(event) {
    const vehicle: Vehicle = event;
    console.log('>> handleRentOneVehicle()', vehicle);

    if (this._authService.isLoggedIn()) {
      this._vehiclesService.rentVehicle(vehicle).subscribe(
        response => {
          console.log('>> rentVehicle() > ', response);

          // Update the vehicle attribute when success
          vehicle.rented = true;

          // Send the notification a vehicle was rented
          this.rentedVehicle.emit(vehicle);
        },
        error => console.error(error),
        () => {
          console.log('>> rentVehicle() > Finished');
        }
      );
    } else {
      console.warn('Not logged user!');
      // Close the modal
      this._toggleModalLoginService.onToggle.emit('Toggle');
    }

  }

}
