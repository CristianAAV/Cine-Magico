/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActorCreateComponent } from './actor-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActorCreateComponent', () => {
  let component: ActorCreateComponent;
  let fixture: ComponentFixture<ActorCreateComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, RouterTestingModule],
      declarations: [ ActorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorCreateComponent);
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

  it('should have a input for name', () => {
    expect(debug.query(By.css('#name'))).toBeTruthy();
  });

  it('should have a input for photo', () => {
    expect(debug.query(By.css('#photo'))).toBeTruthy();
  });

  it('should have a input for nationality', () => {
    expect(debug.query(By.css('#nationality'))).toBeTruthy();
  });

  it('should have a input for birthDate', () => {
    expect(debug.query(By.css('#birthDate'))).toBeTruthy();
  });

  it('should have a input for biography', () => {
    expect(debug.query(By.css('#biography'))).toBeTruthy();
  });

});
