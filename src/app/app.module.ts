import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkSpaceModule } from './work-space/work-space.module';
import { PublicModule } from './public/public.module';
import { AccountModule } from './account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialsModule } from './_core/modules/materials/materials.module';
import { fakeBackendProvider } from './_core/auth/fake-backend';
import { JwtInterceptor } from './_core/auth/jwt.interceptor';
import { ErrorInterceptor } from './_core/auth/error.interceptor';
import { RoleGuardService } from './_core/auth/role-gaurd.service';
import { AuthGuard } from './_core/auth/auth.guard';
import { AuthenticationService } from './_core/services/authentication.service';

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
  providers: [
    RoleGuardService,
    AuthGuard,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
