import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';

//// swiper
////
=======
// routing and component and more
>>>>>>> 104b904895a94da322d8b9e50fdb644c40d94f22
import { AppRoutingModule } from './app-routing.module';
// component
import { AppComponent } from './app.component';
// http client
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
=======
    AppComponent
>>>>>>> 104b904895a94da322d8b9e50fdb644c40d94f22
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    HttpClientModule,
    AppRoutingModule
=======
    AppRoutingModule,
    HttpClientModule
>>>>>>> 104b904895a94da322d8b9e50fdb644c40d94f22
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
