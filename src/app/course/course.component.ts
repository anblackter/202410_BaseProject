import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from "./dataCourses";
import {CourseService} from "./course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];
  constructor(private courseService: CourseService) {  }
  getCourseList(): Array<Course> {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
    return this.courses;
  }
  ngOnInit() {
    this.courses = this.getCourseList();
  }

}
