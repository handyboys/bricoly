import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { ToggleFilterDirective } from './directives/toggle-filter.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SigninComponent,
    ToggleFilterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
