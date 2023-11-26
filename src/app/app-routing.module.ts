import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardComponent } from './dasboard/dasboard.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
  { path: '', component: DasboardComponent }, 
  { path: 'other', component: OtherComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
