import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailComponent } from './public/vehicles/detail/vehicle-detail.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vehicles/:id', component: VehicleDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
