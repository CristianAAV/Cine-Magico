/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReviewCreateComponent } from './review-create.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReviewCreateComponent', () => {
  let component: ReviewCreateComponent;
  let fixture: ComponentFixture<ReviewCreateComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, RouterTestingModule],
      declarations: [ ReviewCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCreateComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a select for movie', () => {
    expect(debug.query(By.css('#movie'))).toBeTruthy();
  });

  it('should have a textarea for text', () => {
    expect(debug.query(By.css('#text'))).toBeTruthy();
  });

  it('should have a textarea with placeholder Enter your review', () => {
    const element: HTMLElement = debug.query(By.css('#text')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('Enter your review');
  });

  it('should have a input for score', () => {
    expect(debug.query(By.css('#score'))).toBeTruthy();
  });

    
  it('should have a input for creator', () => {
    expect(debug.query(By.css('#creator'))).toBeTruthy();
  });


  it('should have a input with placeholder Review creator', () => {
    const element: HTMLElement = debug.query(By.css('#creator')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('Review creator');
  });

  it('should have valid form', () => {
    const form = component.reviewForm;
    fixture.detectChanges();
    form.controls['movie'].setValue("movie");
    form.controls['text'].setValue("text");
    form.controls['score'].setValue(5);
    form.controls['creator'].setValue("creator");
    expect(form.invalid).toBeFalsy();
  });
});
