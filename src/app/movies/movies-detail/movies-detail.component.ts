import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../movieDetail';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  moviesId!: string;
  @Input() movieDetail!: MovieDetail;
  filledStar: string = "★";
  emptyStar: string = "☆";

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (this.movieDetail === undefined) {
      this.moviesId = this.route.snapshot.paramMap.get('id')!;
      if(this.moviesId){
        this.getMovieDetail();
      }
    }
  }

  getMovieDetail(): void {
    this.moviesService.getMovieDetail(this.moviesId).subscribe((movieDetail) => {
      this.movieDetail = movieDetail;
    });
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
