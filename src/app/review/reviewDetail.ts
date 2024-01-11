import { Movie } from '../movies/movie';
import { Review } from './review';

export class ReviewDetail extends Review {

    movie :Movie;
    id: string;
    constructor(
        text: string,
        score: number,
        creator: string,
        movie: Movie,
        id: string
      ) {
        super(text,score,creator);
        this.movie = movie;
        this.id = id;
      }
}