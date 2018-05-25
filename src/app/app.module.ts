import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './public/home/home.component';
import { FullBannerComponent } from './public/home/full-banner/full-banner.component';
import { VehiclesComponent } from './public/vehicles/vehicles.component';
import { AppRoutingModule } from './app-routing.module';
import { VehicleDetailComponent } from './public/vehicles/detail/vehicle-detail.component';
import { LoginFormComponent } from './public/login/login-form/login-form.component';
import { GenerateImageUrlPipe } from './common/pipes/generate-image-url.pipe';
import { GetFirstCharPipe } from './common/pipes/get-first-char.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FullBannerComponent,
    VehiclesComponent,
    VehicleDetailComponent,
    LoginFormComponent,
    GenerateImageUrlPipe,
    GetFirstCharPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
