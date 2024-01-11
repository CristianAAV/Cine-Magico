/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DirectorDetailComponent } from './director-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectorService } from '../director.service';
import { Movie } from 'src/app/movies/movie';
import { DirectorDetail } from '../directorDetail';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('DirectorDetailComponent', () => {
  let component: DirectorDetailComponent;
  let fixture: ComponentFixture<DirectorDetailComponent>;
  let debug: DebugElement;
  let pipe: DatePipe;
  let router: Router;
  let routerSpy: jasmine.SpyObj<Router>;
  let movies: Movie[];
  beforeEach(async(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ DirectorDetailComponent ],
      providers: [DirectorService, DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorDetailComponent);
    component = fixture.componentInstance;
    
    movies = [];
    for (let i = 0; i < 10; i++) {
      const movie = new Movie(
        faker.string.uuid(),
        faker.lorem.paragraph(),
        faker.image.url(),
        faker.number.int(),
        faker.location.country(),
        faker.date.past(),
        faker.number.int(5),
        
        );
      movies.push(movie);
    }

    component.directorDetail = new DirectorDetail(
      faker.string.uuid(),
        faker.person.fullName(),
        faker.image.url(),
        faker.location.country(),
        faker.date.past(),
        faker.lorem.paragraph(),
        movies
    )
    pipe = new DatePipe('en-US');
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h4.director-name element with directorDetail.name', () => {
    const element: HTMLElement = debug.query(By.css('h4.director-name')).nativeElement;
    expect(element.textContent).toContain(component.directorDetail.name);
  });

  it('should have a p.director-nationality element with directorDetail.nationality', () => {
    const element: HTMLElement = debug.query(By.css('p.director-nationality')).nativeElement;
    expect(element.textContent).toContain(component.directorDetail.nationality);
  });
  it('should have a p.director-birthdate element with directorDetail.birthDate', () => {
    const element: HTMLElement = debug.query(By.css('p.director-birthdate')).nativeElement;
    const str = pipe.transform(component.directorDetail.birthDate);
    expect(element.textContent).toContain(str);
  });
  it('should have a p.biography element with directorDetail.biography', () => {
    const element: HTMLElement = debug.query(By.css('p.biography')).nativeElement;
    expect(element.textContent).toContain(component.directorDetail.biography);
  });
 
  it('should have an img element with src= directorDetail.photo', () => {
    expect(debug.query(By.css('img.card-img-top')).attributes['src']).toEqual(
      component.directorDetail.photo
    );
  });
 
  it('should have an img element with alt= directorDetail.name', () => {
    expect(debug.query(By.css('img.card-img-top')).attributes['alt']).toEqual(
      component.directorDetail.name
    );
  });

  it('should have 10 <h4> elements', () => {
    expect(debug.queryAll(By.css('h4.movie-title'))).toHaveSize(10)
  });

  it('should have an movie picture element with src= movie.photo', () => {
    expect(debug.query(By.css('img.movie-picture')).attributes['src']).toEqual(
      component.directorDetail.movies[0].poster
    );
  });
 
  it('should have an img element with alt= movie.title', () => {
    expect(debug.query(By.css('img.movie-picture')).attributes['alt']).toEqual(
      component.directorDetail.movies[0].title
    );
  });

  it('should have an h4.movie-title element with movie.title', () => {
    const element: HTMLElement = debug.query(By.css('h4.movie-title')).nativeElement;
    expect(element.textContent).toContain(component.directorDetail.movies[0].title);

  });

  it('should have an p.movie-text element with movie.releaseDate', () => {
    const element: HTMLElement = debug.query(By.css('p.movie-text')).nativeElement;
    const str = pipe.transform(component.directorDetail.movies[0].releaseDate);
    expect(element.textContent).toContain(str);

  });
  it('should have an p.movie-country element with movie.country', () => {
    const element: HTMLElement = debug.query(By.css('p.movie-country')).nativeElement;
    expect(element.textContent).toContain(component.directorDetail.movies[0].country);

  });

  it('should return 5 filled stars ★★★★★', () => {
    let stars = '★★★★★';
    expect(stars).toEqual(component.calculateStars(5));
  });

  it('should return 5 empty stars ☆☆☆☆☆', () => {
    let stars = '☆☆☆☆☆';
    expect(stars).toEqual(component.calculateStars(0));
  });

  it('should return 2 filled stars ★★☆☆☆', () => {
    let stars = '★★☆☆☆';
    expect(stars).toEqual(component.calculateStars(2));
  });
  /*it('should navigate to movies/id route', () => {
    let detailLink = debug.query(By.css('h5.card-details'));
    detailLink.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/movies', movies[0].id]);
  });*/
});
