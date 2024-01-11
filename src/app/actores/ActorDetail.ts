import { Movie } from '../movies/movie';
import { Actor } from '../actores/actor';

export class ActorDetail extends Actor {
   
    movies: Array<Movie> = [];

    constructor(
        id: string,
        name: string,
        photo: string,
        nationality: string,
        birthDate: any,
        biography: string,
        movies: Array<Movie>
      ) {
        super(id, name, photo, nationality, birthDate, biography);
        this.movies =movies;
      }
}