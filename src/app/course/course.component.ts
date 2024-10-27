import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from "./dataCourses";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];
  constructor() {  }
  getCourseList(): Array<Course> {
    return dataCourses;
  }
  ngOnInit() {
    this.courses = this.getCourseList();
  }

}
