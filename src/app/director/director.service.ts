import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DirectorDetail } from './directorDetail';
import { Director } from './director';

@Injectable({
  providedIn: 'root',
})
export class DirectorService {

  private apiUrl: string = environment.baseUrl + 'directors';

  constructor(private http: HttpClient) {}

  getDirectors(): Observable<DirectorDetail[]> {
    return this.http.get<DirectorDetail[]>(this.apiUrl);
  }

  getDirectorDetail(id: string): Observable<DirectorDetail> {
    return this.http.get<DirectorDetail>(`${this.apiUrl}/${id}`);
  }

  createDirector(director: Director): Observable<Director> {
    return this.http.post<Director>(this.apiUrl, director);
 }
}
