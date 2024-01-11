import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MoviesService } from 'src/app/movies/movies.service';
import { MovieDetail } from 'src/app/movies/movieDetail';
import { ActorDetail } from 'src/app/actores/ActorDetail';
import { ActorService } from 'src/app/actores/actor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-actor-movie',
  templateUrl: './add-actor-movie.component.html',
  styleUrls: ['./add-actor-movie.component.css']
})
export class AddActorMovieComponent implements OnInit {


  
  addactormovieForm!: FormGroup;
  movies: Array<MovieDetail> = [];
  actors: Array<ActorDetail> = [];
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private actorService: ActorService,
    private moviesService:MoviesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.addactormovieForm = this.formBuilder.group({
      movieid: ['', Validators.required],
      actorid: ['', Validators.required]
    });


    this.getMovies();
    this.getActors();
  }
  

  getMovies():void{
    this.moviesService.getMovies().subscribe((movies)=>{
      this.movies = movies;
    });
    }

    
    getActors(): void {
      this.actorService.getActors().subscribe((actores) => {
        this.actors = actores;
      });
    }  

  addActorMovie(addActorMovie:MovieDetail){
      console.info('The movieDetail for movie: ', addActorMovie);
    this.moviesService.addActorMovie(addActorMovie).subscribe(MovieDetailNew=>{
      console.info('The movieDetail for movie: ', MovieDetailNew);
        this.toastr.success("Confirmation",'The actor was associated with the movie');
        this.addactormovieForm.reset();
        this.router.navigate([`/movies/${MovieDetailNew.id}`]);
      }
    )
  
  }




  

  cancelAdd(){
    this.addactormovieForm.reset();
  }

}
