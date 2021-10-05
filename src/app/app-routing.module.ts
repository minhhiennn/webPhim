import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//component
import { DetailComponent } from './Components/detail/detail.component';
import { HomeComponent } from './Components/home/home.component';
import { WatchingComponent } from './Components/watching/watching.component';

const routes: Routes = [
  { path: 'watching', component: WatchingComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
