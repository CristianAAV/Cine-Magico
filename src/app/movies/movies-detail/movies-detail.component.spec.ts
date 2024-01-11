/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';


import { MoviesDetailComponent } from './movies-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Director } from 'src/app/director/director';
import { YoutubeTrailer } from '../youtubeTrailer';
import { MovieDetail } from '../movieDetail';
import { MoviesService } from '../movies.service';
import { Reviews } from '../reviews';
import { Actor } from 'src/app/actores/actor';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesDetailComponent', () => {
  let component: MoviesDetailComponent;
  let fixture: ComponentFixture<MoviesDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ MoviesDetailComponent ],
      providers: [MoviesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDetailComponent);
    component = fixture.componentInstance;

    
    
        
    const reviews = [new Reviews(
      faker.string.uuid(),
      faker.lorem.paragraph(),
      faker.number.int(),
      faker.lorem.sentence()
      )];

          
    const actor = [new Actor(
      faker.string.uuid(),
      faker.lorem.sentence(),
      faker.image.url(),
      faker.location.country(),
      faker.date.past(),
      faker.lorem.sentence()
      )];

    const youtubeTrailer = new YoutubeTrailer(
      faker.string.uuid(),
      faker.lorem.sentence(),
      faker.image.url(),
      faker.number.int(),
      faker.lorem.sentence()
    );
    const director = new Director(
      faker.string.uuid(),
      faker.lorem.sentence(),
      faker.image.url(),
      faker.location.country(),
      faker.date.past(),
      faker.lorem.sentence()
    );
  
    
      const movie = new MovieDetail(
        faker.string.uuid(),
        faker.lorem.sentence(),
        faker.image.url(),
        faker.number.int(),
        faker.location.country(),
        faker.date.past(),
        faker.number.int(5),
        reviews,
        youtubeTrailer,
        director,
        actor
        // faker.person.fullName()
      );
      
      component.movieDetail=movie;
    

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a movieDetail', () => {
    expect(component.movieDetail).toBeTruthy();
  });
  it('should have a movieDetail with title', () => {
    expect(component.movieDetail.title).toBeTruthy();
  });
  it('should have a movieDetail with poster', () => {
    expect(component.movieDetail.poster).toBeTruthy();
  });
  it('should have a movieDetail with youtubeTrailer', () => {
    expect(component.movieDetail.youtubeTrailer).toBeTruthy();
  });
  it('should have a movieDetail with director', () => {
    expect(component.movieDetail.director).toBeTruthy();
  });
  it('should have a movieDetail with actors', () => {
    expect(component.movieDetail.actors).toBeTruthy();
  });

  it('should have a 3  breadcrumb-item', () => {
    expect(debug.queryAll(By.css('.breadcrumb-item')).length).toBe(3);  
  });

  it('should have p tag with the movieDetail.youtubeTrailer.name', () => {
    debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.movieDetail.youtubeTrailer.name)
    });
  });

 it('should have p tag with the movieDetail.director.name', () => {
  debug.queryAll(By.css('p.card-text')).forEach((p, i)=>{
    expect(p.nativeElement.textContent).toContain(component.movieDetail.director.name)
   });
 });

  it('should have px-md-0 px-sm-0 Siapsis', () => {
    debug.queryAll(By.css('px-md-0 px-sm-0')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain('Sinapsis')
     });
   });

  
  it('should have movie-review-text - reviews.text', () => {
    debug.queryAll(By.css('movie-review-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.movieDetail.reviews[i].text)
     });
   }); 

  it('should have col-6 - actor.name', () => {
    debug.queryAll(By.css('movie-review-text')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.movieDetail.actors[i].name)
     });
   });

});