import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './account-pages/login/login.component';
import { SignupComponent } from './account-pages/signup/signup.component';
import { AccountLayoutModule } from './account-layout/account-layout.module';
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AccountLayoutModule,
    AccountRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [AccountLayoutModule],
})
export class AccountModule {}
