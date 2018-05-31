import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  handleChangeVehicle(event) {
    const temporaryVehicle: Vehicle = event;
    console.log('>> handleChangeVehicle()', temporaryVehicle);

    if (this._authService.isLoggedIn()) {
      this._vehiclesService.rentVehicle(temporaryVehicle).subscribe(
        response => {

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
