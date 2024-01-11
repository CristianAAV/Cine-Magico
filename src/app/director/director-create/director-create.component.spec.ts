/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DirectorCreateComponent } from './director-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectorService } from '../director.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DirectorCreateComponent', () => {
  let component: DirectorCreateComponent;
  let fixture: ComponentFixture<DirectorCreateComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, RouterTestingModule],
      declarations: [ DirectorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorCreateComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should contain a form element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });
  
  it('should have a input for name', () => {
    expect(debug.query(By.css('#name'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter Name', () => {
    const element: HTMLElement = debug.query(By.css('#name')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('Enter Name');
  });

    
  it('should have a input for photo', () => {
    expect(debug.query(By.css('#photo'))).toBeTruthy();
  });
  it('should have a input with placeholder URL with image', () => {
    const element: HTMLElement = debug.query(By.css('#photo')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('URL with image');
  });

    
  it('should have a input for nationality', () => {
    expect(debug.query(By.css('#nationality'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter Nationality', () => {
    const element: HTMLElement = debug.query(By.css('#nationality')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('Enter Nationality');
  });

    
  it('should have a input for birthDate', () => {
    expect(debug.query(By.css('#birthDate'))).toBeTruthy();
  });

  it('should have a input for biography', () => {
    expect(debug.query(By.css('#biography'))).toBeTruthy();
  });
  it('should have a input with placeholder Enter Biography', () => {
    const element: HTMLElement = debug.query(By.css('#biography')).nativeElement;
    expect(element.getAttribute("placeholder")).toContain('Enter Biography');
  });

  it('should have valid form', () => {
    const form = component.directorForm;
    fixture.detectChanges();
    form.controls['name'].setValue("name");
    form.controls['photo'].setValue("photo");
    form.controls['nationality'].setValue("nationality");
    form.controls['birthDate'].setValue("birthDate");
    form.controls['biography'].setValue("biography");
    expect(form.invalid).toBeFalsy();
  });
  
});
