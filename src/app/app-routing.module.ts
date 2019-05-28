import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeelistComponent} from './employeelist/employeelist.component'
const routes: Routes = [
  {path:'employeelist', component:EmployeelistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
