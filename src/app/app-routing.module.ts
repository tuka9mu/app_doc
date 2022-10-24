import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { DoctorComponent } from './components/Doctor/doctor/doctor.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import {SidebarComponent} from './components/Doctor/sidebar/sidebar.component';
const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'',component:LoginComponent},
  {path:'main/add',component:AddpatientComponent},
  {path:'main/doc',component:DoctorComponent},
  {path:'main/doc/dashboard',component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
