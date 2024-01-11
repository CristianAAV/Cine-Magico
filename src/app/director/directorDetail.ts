import { Director } from '../director/director';
import { Movie } from '../movies/movie';

export class DirectorDetail extends Director {
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
        this.movies = movies;
      }
}