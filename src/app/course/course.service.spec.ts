import { TestBed, async, inject } from '@angular/core/testing';

import { CourseService } from './course.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";



describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
  });

  it('should be created', inject([CourseService], (service: CourseService) => {
    expect(service).toBeTruthy();
  }));
});
