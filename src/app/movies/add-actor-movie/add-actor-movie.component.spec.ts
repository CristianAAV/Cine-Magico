/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AddActorMovieComponent } from './add-actor-movie.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddActorMovieComponent', () => {
  let component: AddActorMovieComponent;
  let fixture: ComponentFixture<AddActorMovieComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, RouterTestingModule],
      declarations: [ AddActorMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActorMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a form element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should have a select for movie', () => {
    expect(debug.query(By.css('#movieid'))).toBeTruthy();
  });

  it('should have a select for actor', () => {
    expect(debug.query(By.css('#actorid'))).toBeTruthy();
  });


  it('should have a label with title Select Movie', () => {
    const labelElement: HTMLElement = debug.query(By.css('.form-title-movie')).nativeElement;
    expect(labelElement.textContent).toContain('Select Movie');
  });

  it('should have a label with title Select Actor', () => {
    const labelElement: HTMLElement = debug.query(By.css('.form-title-actor')).nativeElement;
    expect(labelElement.textContent).toContain('Select Actor');
  });


  it('should have a button with text Associate', () => {
    const associateButton: HTMLElement = debug.query(By.css('button[type="associate"]')).nativeElement;
    expect(associateButton.textContent).toContain('Associate');
  });
  
  it('should have a button with text Cancel', () => {
    const cancelButton: HTMLElement = debug.query(By.css('button.btn.btn-danger.ml-3')).nativeElement;
    expect(cancelButton.textContent).toContain('Cancel');
  });
});
