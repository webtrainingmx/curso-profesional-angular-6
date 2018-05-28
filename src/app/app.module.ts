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
import { FilterByPipe } from './common/pipes/filter-by.pipe';
import { SessionStorageService } from 'ngx-webstorage';
import { AuthHomeComponent } from './auth/home/auth-home.component';
import { AfterLoginActionsService } from './common/services/after-login-actions.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AuthHomeComponent,
    FullBannerComponent,
    VehiclesComponent,
    VehicleDetailComponent,
    LoginFormComponent,
    GenerateImageUrlPipe,
    GetFirstCharPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SessionStorageService, AfterLoginActionsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
