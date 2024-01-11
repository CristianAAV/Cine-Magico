/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DirectorListComponent } from './director-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectorService } from '../director.service';
import { DirectorDetail } from '../directorDetail';
import { RouterTestingModule } from '@angular/router/testing';

describe('DirectorListComponent', () => {
  let component: DirectorListComponent;
  let fixture: ComponentFixture<DirectorListComponent>;
  let debug: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ DirectorListComponent ],
      providers: [DirectorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 10; i++) {
      const director = new DirectorDetail(
        faker.string.uuid(),
        faker.person.fullName(),
        faker.image.url(),
        faker.location.country(),
        faker.date.past(),
        faker.lorem.paragraph(),
        []
      );
      component.directors.push(director);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
  });
 
  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
  });
 
  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });
 
  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });
 
  it('should have the corresponding src to the director image and alt to the director name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.directors[i].photo)
 
      expect(img.attributes['alt']).toEqual(
        component.directors[i].name)
    })
  });
 
  it('should have h4 tag with the director.name', () => {
    debug.queryAll(By.css('h4.card-title')).forEach((h4, i)=>{
      expect(h4.nativeElement.textContent).toContain(component.directors[i].name)
    });
  });
 
  it('should have p tag with the director.nationality', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.directors[i].nationality)
    });
  });
 
  it('should have 9 <div.col.mb-2> elements and the deleted director should not exist', () => {
    const book = component.directors.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)
 
    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(book.name);
    });
  });

  it('should filter directors by name', () => {
    component.onFiltered('option1');
    fixture.detectChanges();
    expect(component.selectedFilter).toEqual('option1');
  });

  it('should filter directors by nationality', () => {
    component.onFiltered('option1');
    fixture.detectChanges();
    expect(component.selectedFilter).toEqual('option1');
  });
});
