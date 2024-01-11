/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActorAssociationComponent } from './actor-association.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActorAssociationComponent', () => {
  let component: ActorAssociationComponent;
  let fixture: ComponentFixture<ActorAssociationComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule, RouterTestingModule],
      declarations: [ ActorAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorAssociationComponent);
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

  it('should have an actor name', () => {
    expect(debug.query(By.css('#actorid'))).toBeTruthy();
  });

  it('should have an movie name', () => {
    expect(debug.query(By.css('#movieid'))).toBeTruthy();
  });


});

