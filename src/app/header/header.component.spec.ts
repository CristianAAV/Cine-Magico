/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an img element with src= /assets/icon/TICONO_GREEN.png', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      "/assets/icon/TICONO_GREEN.png"
    );
  });
  it('should have an img element with alt= icono-magico', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      "icono-cine-magico"
    );
  });
  it('should have 4 <li> elements', () => {
    expect(debug.queryAll(By.css('li.nav-item'))).toHaveSize(4)
  });
});
