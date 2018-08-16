import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './shared/core/interceptors/error.interceptor';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { RegisterComponent } from './shared/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RepairCardModule } from './modules/repairCardModule/repairCard.module';
import { HomeLayoutComponent } from './shared/layouts/main-layout.component';
import { LoginLayoutComponent } from './shared/layouts/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    HomeLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RepairCardModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }) // debugging routes
  ],
  exports: [
    AppMaterialModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
