import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KngUserComponent } from './kng-user/kng-user.component';



const routes: Routes = [

  {
    path: 'login',
    pathMatch: 'full',
    component: KngUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
