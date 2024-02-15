import { Component } from '@angular/core';
import {Student} from "../../models/student.model";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  Student: Student={
    title: '',
    description: '',
    published: false
  }
  submitted=false;

  constructor(private StudentService:StudentService) {
  }
saveStudent():void{
    const data={
      title:this.Student.title,
      description: this.Student.description
    };
    this.StudentService.create(data).subscribe(
      {
        next:(res)=>{
          console.log(res);
          this.submitted=true;
        }
      }
    );
}
  newStudent():void{
    this.submitted=false;
    this.Student={
      title:'',
      description:'',
      published:false
    };
  }

}
