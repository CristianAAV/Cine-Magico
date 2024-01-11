import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { YoutubeTrailer } from '../youtubeTrailer';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
})
export class MovieCreateComponent implements OnInit {
  youtubeTrailer_id!: string;
  genero!: string;
  directo!: string;
  id!: string;
  movieForm!: FormGroup;

  youtubeTrailerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private movieService: MoviesService,
    private router: Router
  ) {
    this.id = uuidv4();
    this.youtubeTrailer_id = this.id;

    this.genero = '2fb83849-05f9-4e4e-954b-5e736c2d7445';
    this.directo = '71e0af28-a497-4a3a-be89-1e752604ed9c';
  }

  ngOnInit() {
    this.youtubeTrailerForm = this.formBuilder.group({
      id: [this.youtubeTrailer_id],
      name: ['TRAILER YOUTUBE'],
      url: ['https://www.youtube.com/watch?v=cHsKzdyXDH0'],
      duration: [10],
      channel: ['YOUTUBE'],
    });

    this.movieForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      poster: ['', [Validators.required]],
      duration: [
        '',
        [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)],
      ],
      country: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      releaseDate: [new Date().toISOString(), Validators.required],
      popularity: [
        '',
        [Validators.required, Validators.pattern(/^-?\d+\.?\d*$/)],
      ],
      genre: [{ id: this.genero }],
      director: [{ id: this.directo }],
      // youtubeTrailer: [{"id": "68c1a387-8b77-4661-94ac-ef3a6384de26"}]
      youtubeTrailer: [{ id: this.youtubeTrailer_id }],
    });
  }

  createMovie(youtubeTrailer: YoutubeTrailer, movie: Movie) {
    console.log(this.youtubeTrailerForm.value);
    this.movieService
      .createyoutubeTrailer(youtubeTrailer)
      .subscribe((youtubeTrailerNew) => {
        console.info('The youtubeTrailer was created: ', youtubeTrailerNew);

        movie.releaseDate = new Date(movie.releaseDate).toISOString();
        console.log(this.movieForm.value);
        this.youtubeTrailerForm.reset();
        this.movieService.createMovie(movie).subscribe((movieNew) => {
          console.info('The Movie was created: ', movieNew);
          this.toastr.success('Confirmation', 'Movie created');
          this.movieForm.reset();

          this.genero = '2fb83849-05f9-4e4e-954b-5e736c2d7445';
          this.directo = '71e0af28-a497-4a3a-be89-1e752604ed9c';

          this.movieForm.patchValue({
            genre: { id: this.genero },
            director: { id: this.directo },
            youtubeTrailer: { id: this.youtubeTrailer_id },
          });

          this.router.navigate([`/movies/${movieNew.id}`]);
        });
        movie = this.movieForm.value;

        this.id = uuidv4();
        this.youtubeTrailer_id = this.id;

        this.youtubeTrailerForm.patchValue({
          id: this.youtubeTrailer_id,
          name: 'TRAILER YOUTUBE',
          url: 'https://www.youtube.com/watch?v=cHsKzdyXDH0',
          duration: 10,
          channel: 'YOUTUBE',
        });
      });
  }

  cancelCreation() {
    this.movieForm.reset();
  }

  getMaxDate() {
    const today = new Date();
    return today.toISOString().slice(0, 10); // Format: YYYY-MM-DD
  }
}
