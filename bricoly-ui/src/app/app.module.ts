import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';

// Bootstrap-based material design UI library
import { MDBBootstrapModule } from 'angular-bootstrap-md'; 

import { AgmCoreModule } from '@agm/core';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleFilterDirective } from './directives/toggle-filter.directive';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';






@NgModule({
  declarations: [
    AppComponent,
    ToggleFilterDirective,
    NavbarComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB3Z8u3uZ-qxEQW9xusAZIRnpUULTBI1X8'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
