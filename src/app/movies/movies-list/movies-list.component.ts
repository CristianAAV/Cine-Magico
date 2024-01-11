import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MovieDetail } from '../movieDetail';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  filledStar: string = "★";
  emptyStar: string = "☆";
  

  movies: Array<MovieDetail> = [];
  
  selected: boolean = false;
  selectedMovie!: MovieDetail;
  selectedFilter: string = '';
  movieSearch: string = '';
  constructor( 
    private moviesService:MoviesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies():void{
  this.moviesService.getMovies().subscribe((movies)=>{
    this.movies = movies;
  });
  }
  
  onSelected(movies: MovieDetail): void {
    this.selected = true;
    this.selectedMovie = movies;
    this.router.navigate(['/movies', movies.id]);
  }
 
  onFiltered(filter: string): void {
    this.selectedFilter = filter;
    this.orderMovies(filter);
  }

  orderMovies(option: string): void {
    if (option === 'option1') {
      this.movies.sort((a, b) =>  b.popularity - a.popularity);
    } else {
      this.movies.sort((a, b) => a.country.localeCompare(b.country));
    }
  }

  onSearchMovie(): void {
    if (this.movieSearch) {
      this.moviesService
        .getMovies()
        .pipe(
          map((movies) =>
            movies.filter((moviesf) =>
              moviesf.title
                .toLowerCase()
                .includes(this.movieSearch.toLowerCase())
            )
          )
        )
        .subscribe((movies) => (this.movies = movies));
    } else {
      this.getMovies();
    }

  }


  
  calculateStars(rating: number): string {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += this.filledStar;
    }
    for( let i = rating; i < 5; i++) {
      stars += this.emptyStar;
    }
    return stars;
  }
}
