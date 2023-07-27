import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './access-pages/signup/signup.component';
import { LoginComponent } from './access-pages/login/login.component';
import { AccessLayoutModule } from './access-layout/access-layout.module';
import { AccessRoutingModule } from './access-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AccessLayoutModule,
    AccessRoutingModule
  ]
})
export class AccessModule { }
