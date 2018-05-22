import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from './public/vehicles/detail/vehicle-detail.component';

const routes: Routes = [
  // {path: 'detail', component: VehicleDetailComponent}
];

@NgModule({
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule {
}
