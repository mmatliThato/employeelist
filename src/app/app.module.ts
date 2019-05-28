import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import{RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
const appRoutes:Routes =[

  {
    path:'',
    component: LoginComponent
  },
  {
    path:'employeelist',
    component: EmployeelistComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeelistComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
