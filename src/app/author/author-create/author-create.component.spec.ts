import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCreateComponent } from './author-create.component';
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from "@angular/forms";

describe('AuthorCreateComponent', () => {
  let component: AuthorCreateComponent;
  let fixture: ComponentFixture<AuthorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [AuthorCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
