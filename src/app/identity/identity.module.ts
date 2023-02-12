import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityRoutingModule } from './identity-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    MaterialModule,
  ]
})
export class IdentityModule { }
