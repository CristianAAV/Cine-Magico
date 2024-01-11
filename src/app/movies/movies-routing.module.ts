import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { AddActorMovieComponent } from './add-actor-movie/add-actor-movie.component';

const routes: Routes = [{
  path: 'movies',
  children: [
    
    {
      path: 'associate',
      component: AddActorMovieComponent
    },
    {
      path: 'create',
      component: MovieCreateComponent
    },
    {
      path: 'list',
      component: MoviesListComponent
    },
    {
      path: ':id',
      component: MoviesDetailComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
