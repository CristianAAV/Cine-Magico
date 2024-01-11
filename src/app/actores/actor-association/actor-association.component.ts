import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MovieDetail } from 'src/app/movies/movieDetail';
import { MoviesService} from 'src/app/movies/movies.service';
import { ActorDetail } from '../ActorDetail';
import { ActorService } from '../actor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-association',
  templateUrl: './actor-association.component.html',
  styleUrls: ['./actor-association.component.css']
})
export class ActorAssociationComponent implements OnInit {

  addmovieactorForm!: FormGroup;

  movies: Array<MovieDetail> = [];
  actors: Array<ActorDetail> = [];

  constructor(
    private toastr: ToastrService,
    private actorService: ActorService,
    private formBuilder: FormBuilder,
    private moviesService:MoviesService,
    private router: Router) { }

  ngOnInit() {
    this.addmovieactorForm = this.formBuilder.group({
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
        this.actors = actores
      });
    }  

  addActorMovie(addMovieActor:ActorDetail){
      console.info('<movie information to an actor>: ', addMovieActor);
    this.actorService.addMovieActor(addMovieActor).subscribe(ActorDetailNew=>{
      console.info('The movieDetail for movie: ', ActorDetailNew);
        this.toastr.success("Confirmation",'The actor was associated with the movie');
        this.addmovieactorForm.reset();
        this.router.navigate([`/actors/${ActorDetailNew.id}`])
      }
    )
  
  }

  cancelAdd(){
    this.addmovieactorForm.reset();
  }

}
