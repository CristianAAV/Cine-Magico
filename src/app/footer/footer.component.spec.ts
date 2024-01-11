/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debug: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an img element with src= /assets/icon/TICONO_PALE.png', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      "/assets/icon/TICONO_PALE.png"
    );
  });
  it('should have an img element with alt= icono-magico', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      "icono-magico-logo"
    );
  });
  it('should have 6 <a> icon footer elements', () => {
    expect(debug.queryAll(By.css('a.icon-footer'))).toHaveSize(6)
  });
  it('should have a copyright element', () => {
    expect(debug.queryAll(By.css('p.copyrigth'))).toHaveSize(1)
  });
});
