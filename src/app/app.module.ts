import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { AddpatientComponent } from './components/addpatient/addpatient.component';
import { DoctorComponent } from './components/Doctor/doctor/doctor.component';
import { SidebarComponent } from './components/Doctor/sidebar/sidebar.component';
import { DrugstableComponent } from './components/Doctor/drugstable/drugstable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    ListComponent,
    AddpatientComponent,
    DoctorComponent,
    SidebarComponent,
    DrugstableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
