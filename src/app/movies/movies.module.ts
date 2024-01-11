import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { AddActorMovieComponent } from './add-actor-movie/add-actor-movie.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MoviesRoutingModule,
    ReactiveFormsModule
  ],
  exports: [MoviesListComponent],
  declarations: [MoviesListComponent, MoviesDetailComponent, MovieCreateComponent,AddActorMovieComponent]
})
export class MoviesModule { }
