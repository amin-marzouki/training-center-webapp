import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from './components/student-list/student-list.component';
import {AddStudentComponent} from "./components/add-student/add-student.component";
import {StudentDetailComponent} from "./components/student-detail/student-detail.component";


const routes: Routes = [
  {path:'',redirectTo:'tutorials',},
  {path:'/student/:id',component:StudentDetailComponent},
  {path:'/student-list',component:StudentListComponent},
  {path:'/student-add',component:AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
