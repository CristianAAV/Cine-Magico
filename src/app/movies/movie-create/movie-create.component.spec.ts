/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieCreateComponent } from './movie-create.component';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieCreateComponent', () => {
  let component: MovieCreateComponent;
  let fixture: ComponentFixture<MovieCreateComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,
        ToastrModule.forRoot(), 
        HttpClientModule,
        RouterTestingModule],
      declarations: [ MovieCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCreateComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a form element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
  
  it('should have a input for title', () => {
    expect(debug.query(By.css('#title'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter Title', () => {
    const element: HTMLElement = debug.query(By.css('#title')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('movie title');
  });
  
  it('should have a input for poster', () => {
    expect(debug.query(By.css('#poster'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter poster', () => {
    const element: HTMLElement = debug.query(By.css('#poster')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('URL with movie poster');
  });
  
  it('should have a input for duration', () => {
    expect(debug.query(By.css('#duration'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter duration', () => {
    const element: HTMLElement = debug.query(By.css('#duration')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('movie duration');
  });

  
  it('should have a input for duration', () => {
    expect(debug.query(By.css('#duration'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter duration', () => {
    const element: HTMLElement = debug.query(By.css('#duration')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('movie duration');
  });


  it('should have a input for country', () => {
    expect(debug.query(By.css('#country'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter country', () => {
    const element: HTMLElement = debug.query(By.css('#country')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('movie country');
  });


  it('should have a input for releaseDate', () => {
    expect(debug.query(By.css('#releaseDate'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter releaseDate', () => {
    const element: HTMLElement = debug.query(By.css('#releaseDate')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('movie releaseDate');
  });


  it('should have a input for popularity', () => {
    expect(debug.query(By.css('#popularity'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter popularity', () => {
    const element: HTMLElement = debug.query(By.css('#popularity')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('movie popularity of 1 - 5');
  });


});
