/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActorListComponent } from './actor-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActorService } from '../actor.service';
import { Actor } from '../actor';
import { faker } from '@faker-js/faker';
import { ActorDetail } from '../ActorDetail';
import { Movie } from 'src/app/movies/movie';
import { RouterTestingModule } from '@angular/router/testing';


describe('ActorListComponent', () => {
  let component: ActorListComponent;
  let fixture: ComponentFixture<ActorListComponent>;
  let debug:DebugElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorListComponent ],
      imports:[HttpClientModule, RouterTestingModule],
      providers:[ActorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListComponent);
    component = fixture.componentInstance;

    const movies: Movie[] = [];
    for (let i = 0; i < 10; i++) {
      const movie = new Movie(
        faker.string.uuid(),
        faker.lorem.sentence(),
        faker.image.url(),
        faker.number.int(),
        faker.location.country(),
        faker.date.past(),
        faker.number.int()


      );
      movies.push(movie);
    }

    const actores: ActorDetail[] = [];
    for (let i = 0; i < 10; i++) {
      const actor = new ActorDetail(
        faker.string.uuid(),
        faker.person.fullName(),
        faker.image.url(),
        faker.location.country(),
        faker.date.past(),
        faker.lorem.paragraph(),
        movies
      );
      actores.push(actor);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one <img> element', () => {
    const elements = debug.queryAll(By.css('img.imagen-actor'));
    expect(elements.length).toEqual(0);
  });
 


  it('should have title-actores elements', () => {
    debug.queryAll(By.css('h2.title-actores')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain('ACTORS')
     });
   });

   it('should have card-title - name.actor', () => {
    debug.queryAll(By.css('card-title')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.actores[i].name)
     });
   });

   it('should have p card-text - actor. nacionality', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.actores[i].nationality)
     });
   });




  
  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img')).length).toBeGreaterThanOrEqual(0);
  });
 


  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('card-body')).length).toBe(0);
  });
 



  it('should have the corresponding actor image', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.actores[i].photo)
 
      expect(img.attributes['alt']).toEqual(
        component.actores[i].name)
    })
  });
 
  it('should have h4 tag with the actor.name', () => {
    debug.queryAll(By.css('h4.card-title')).forEach((h4, i)=>{
      expect(h4.nativeElement.textContent).toContain(component.actores[i].name)
    });
  });
 
  it('should have p tag with the actor.nationality', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.actores[i].nationality)
    });
  });
 
  

});

