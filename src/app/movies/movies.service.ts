import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MovieDetail } from './movieDetail';
import { Movie } from './movie';
import { YoutubeTrailer } from './youtubeTrailer';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl :string = environment.baseUrl + 'movies';

  constructor( private http: HttpClient ) { }

  getMovies(): Observable<MovieDetail[]> {
  return this.http.get<MovieDetail[]>(this.apiUrl);
}

  getMovieDetail(id: string): Observable<MovieDetail> {
  return this.http.get<MovieDetail>(`${this.apiUrl}/${id}`);
}

  createyoutubeTrailer(youtubeTrailer: YoutubeTrailer): Observable<YoutubeTrailer> {
  const url = `http://localhost:3000/api/v1/youtube-trailers`;
  return this.http.post<YoutubeTrailer>(url, youtubeTrailer);
}


  createMovie(movie: Movie): Observable<Movie> {
  return this.http.post<Movie>(this.apiUrl, movie);
}



  updateMovie(movie: MovieDetail): Observable<MovieDetail> {
  return this.http.put<MovieDetail>(`${this.apiUrl}/${movie.id}`, movie);
}

  deleteMovie(id: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}

  // // se crea metodo para obtener una película por ID
  // getMovieById(movieId: string): Observable<Movie> {
  //   const url = `${this.apiUrl}/movies/${movieId}`;
  //   return this.http.get<Movie>(url);
  // }

  // // se crea metodo para agregar un nuevo actor a la lista de actores de una misma película
  // addActorToMovie(movieId: string, newActor: Actor): Observable<Movie> {
  //   const url = `${this.apiUrl}/movies/${movieId}/addActor`;
  //   return this.http.post<Movie>(url, { newActor });
  // }

  addActorMovie(addActorMovie: any): Observable<Movie> {
    return this.http.post<MovieDetail>(`${this.apiUrl}/${addActorMovie.movieid}/actors/${addActorMovie.actorid}`, addActorMovie);
}


}
