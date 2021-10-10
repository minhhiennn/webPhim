import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
// swapper slider
import { CarouselModule } from 'ngx-owl-carousel-o';
//component
import { DetailComponent } from './Components/detail/detail.component';
import { HomeComponent } from './Components/home/home.component';
import { WatchingComponent } from './Components/watching/watching.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { ListComponent } from './Components/list/list.component';


const routes: Routes = [
  { path: 'watching', component: WatchingComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'list', component: ListComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  declarations: [
    DetailComponent,
    HomeComponent,
    WatchingComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CarouselModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
