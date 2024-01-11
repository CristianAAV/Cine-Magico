import { Movie } from '../movies/movie';
import { Director } from '../director/director';
import { Actor } from '../actores/actor';
import { Reviews } from './reviews';
import { YoutubeTrailer } from './youtubeTrailer';

export class MovieDetail extends Movie {
    actors:Array<Actor> = [];
    reviews:Array<Reviews> = [];
    youtubeTrailer :YoutubeTrailer;
    director:Director; 

    constructor(
        id:string,
        title:string,
        poster:string,
        duration:number,
        country:string,
        releaseDate:any,
        popularity:number,
        reviews:Array<Reviews>,
        youtubeTrailer:YoutubeTrailer,
        director:Director,
        actors:Array<Actor>
      ) {
        super(id, title, poster, duration, country, releaseDate, popularity);
        this.reviews=reviews;
        this.youtubeTrailer=youtubeTrailer;
        this.director=director;
        this.actors = actors;
      }
}
