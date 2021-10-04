import { WatchingComponent } from './Components/watching/watching.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebphimdetailsComponent } from './Components/webphimdetails/webphimdetails.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';

import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WebphimdetailsComponent,
    WatchingComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
