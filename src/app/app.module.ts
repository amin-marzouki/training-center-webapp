import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import {FormsModule} from "@angular/forms";
import { AddStudentComponent } from './components/add-student/add-student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    AddStudentComponent,
    StudentDetailComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
