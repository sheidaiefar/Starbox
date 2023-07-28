import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkSpaceModule } from './work-space/work-space.module';
import { PublicModule } from './public/public.module';
import { AccountModule } from './account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './_core/modules/materials/materials.module';
import { fakeBackendProvider } from './_core/auth/fake-backend';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    WorkSpaceModule,
    AccountModule,
    PublicModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
