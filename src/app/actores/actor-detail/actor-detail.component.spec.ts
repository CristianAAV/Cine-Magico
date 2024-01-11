/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActorDetailComponent } from './actor-detail.component';
import { faker } from '@faker-js/faker';
import { Actor } from '../actor';
import { ActorDetail } from '../ActorDetail';
import { Movie } from 'src/app/movies/movie';
import { DatePipe } from '@angular/common';
import { ActorService } from '../actor.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActorDetailComponent', () => {
  let component: ActorDetailComponent;
  let fixture: ComponentFixture<ActorDetailComponent>;
  let debug:DebugElement;
  let pipe: DatePipe;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ActorDetailComponent ],
      providers: [ActorService, DatePipe]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(ActorDetailComponent);
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
    component.actorDetail=new ActorDetail(faker.string.uuid(),
    faker.person.fullName(),
    faker.image.url(),
    faker.location.country(),
    faker.date.past(),
    faker.lorem.paragraph(),
    movies
    );


    fixture.detectChanges();
    debug = fixture.debugElement;
    pipe = new DatePipe('en-US');

  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a name', () => {
    expect(component.actorDetail.name).toBeTruthy();
  });


  it('should have a h4.actor-name element with ActorDetail.name', () => {
    debug.queryAll(By.css('h4.actorDetail.name')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.actorDetail.name)
     });
   });


  it('should have a actor-nationality element with actorDetail.nationality', () => {
    debug.queryAll(By.css('actor-nationality')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.actorDetail.nationality)
     });
   });


  it('should have a img element with actorDetail.photo', () => {
    const elements = debug.queryAll(By.css('img element'));
    expect(elements.length).toEqual(0);
  });


  it('should have a p.actor element with actorDetail.birthDate', () => {
    const elements = debug.queryAll(By.css('p.actorDetail.birthDate'));
    expect(elements.length).toEqual(0);
  });

  it('should have a p.actor element with actorDetail.biography', () => {
    const elements = debug.queryAll(By.css('p.actor'));
    expect(elements.length).toEqual(0);
  });


  it('should have at least one <img> element', () => {
    const elements = debug.queryAll(By.css('img.imagen-actor'));
    expect(elements.length).toEqual(0);
  });
 
  it('should have title-actores elements', () => {
    debug.queryAll(By.css('h2.title-actores')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain('ACTORES')
     });
   });

 

});
