import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Modules/home/home.module';
import { UserModule } from './Modules/user/user.module';
import { DoctorModule } from './Modules/doctor/doctor.module';
import { SharedModule } from './Modules/shared/shared.module';

import { AuthModule } from './Modules/auth/auth.module';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
   AuthModule,
    UserModule,
    DoctorModule,
    SharedModule,
    ReactiveFormsModule,
    
    RouterLink,
          BrowserAnimationsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
