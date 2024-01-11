import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Actor } from './actor';
import { ActorDetail } from './ActorDetail';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private apiUrl: string = environment.baseUrl + 'actors';

  constructor(private http: HttpClient) { }

  getActors(): Observable<ActorDetail[]> {
    return this.http.get<ActorDetail[]>(this.apiUrl);
  }

  getActorDetail(id: string): Observable<ActorDetail> {
    return this.http.get<ActorDetail>(`${this.apiUrl}/${id}`);
  }

  createActor(actor: Actor): Observable<Actor> {
    return this.http.post<Actor>(this.apiUrl, actor);
  }
  
  
  addMovieActor(addMovieActor: any): Observable<Actor> {
    return this.http.post<ActorDetail>(`${this.apiUrl}/${addMovieActor.actorid}/movies/${addMovieActor.movieid}`, addMovieActor);
}

}
