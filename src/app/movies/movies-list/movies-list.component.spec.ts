/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MoviesListComponent } from './movies-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../movie';
import { MovieDetail } from '../movieDetail';
import { MoviesService } from '../movies.service';
import { Reviews } from '../reviews';
import { YoutubeTrailer } from '../youtubeTrailer';
import { Actor } from 'src/app/actores/actor';
import { Director } from 'src/app/director/director';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ MoviesListComponent ],
      providers: [MoviesService]
    })
    .compileComponents();
  }));

    beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;


    const youtubeTrailer = new YoutubeTrailer(
      faker.string.uuid(),
      faker.lorem.sentence(),
      faker.image.url(),
      faker.datatype.number(),
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
    
    for (let i = 0; i < 10; i++) {
      const movie = new MovieDetail(
        faker.string.uuid(),
        faker.lorem.sentence(),
        faker.image.url(),
        faker.datatype.number(),
        faker.location.country(),
        faker.date.past(),
        faker.datatype.number(),        
        [],
        youtubeTrailer,
        director,
        []
      );
      component.movies.push(movie);
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
 

  it('should have the corresponding src to the movies image and alt to the movies title', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.movies[i].poster)
 
      expect(img.attributes['alt']).toEqual(
        component.movies[i].title)
    })
  });

  it('should have h4 tag with the movies.title', () => {
    debug.queryAll(By.css('h4.card-title')).forEach((h4, i)=>{
      expect(h4.nativeElement.textContent).toContain(component.movies[i].title)
    });
  });


   

  it('should have 9 <div.col.mb-2> elements and the deleted movies should not exist', () => {
    const book = component.movies.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)
 
    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(book.title);
    });
  });


});

