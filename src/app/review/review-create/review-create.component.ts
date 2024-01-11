import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { ReviewRaw } from '../reviewRaw';
import { MoviesService } from 'src/app/movies/movies.service';
import { MovieDetail } from 'src/app/movies/movieDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css']
})
export class ReviewCreateComponent implements OnInit {

  reviewForm!: FormGroup;
  movies: Array<MovieDetail> = [];
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private reviewService: ReviewService,
    private moviesService:MoviesService,
    private router: Router
  ) {}
  

  ngOnInit() {
    this.reviewForm = this.formBuilder.group({
      movie: ['', Validators.required],
      text: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(500),
        ],
      ],
      score: [5],
      creator: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]]
    });
    this.getMovies();
  }

  getMovies():void{
    this.moviesService.getMovies().subscribe((movies)=>{
      this.movies = movies;
    });
    }

  createReviewForMovie(reviewRaw: ReviewRaw) {
    let reviewToCreate = new Review(reviewRaw.text,reviewRaw.score,reviewRaw.creator);
    let movieId = reviewRaw.movie;
    console.log(reviewToCreate)
    console.log(movieId)
    this.reviewService.createReview(reviewToCreate, movieId).subscribe(reviewDetail=>{
      console.info('The review for movie was created: ', reviewDetail);
      this.toastr.success('Confirmation', 'Review created');
      this.reviewForm.reset();
      this.router.navigate([`/movies/${reviewDetail.movie.id}`])
    });
  }

  cancelCreation() {
    this.reviewForm.reset();
  }

}
