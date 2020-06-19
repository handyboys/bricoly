import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';



import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleFilterDirective } from './directives/toggle-filter.directive';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ReviewCardsComponent } from './components/review-cards/review-cards.component';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FindProfessionalComponent } from './components/find-professional/find-professional.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';

import { FilterProfessionalsPipe } from './pipes/filter-professionals.pipe';
import { HomeCategoryIconsComponent } from './components/home-category-icons/home-category-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleFilterDirective,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    HowItWorksComponent,
    ReviewCardsComponent,
    FindProfessionalComponent,
    FilterComponent,
    FooterComponent,
    AboutUsComponent,
    BlogComponent,
    JobHistoryComponent,
    FilterProfessionalsPipe,
    HomeCategoryIconsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMYPnWea___Dw9-tH1JyxaAGuvAI0iWvA'
    })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
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
