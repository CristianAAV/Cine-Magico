import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Review } from './review';
import { ReviewDetail } from './reviewDetail';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl: string = environment.baseUrl + 'movies';

  constructor(private http: HttpClient) {}

  createReview(review: Review, movieId: string): Observable<ReviewDetail> {
    let reviewUrl = `${this.apiUrl}/${movieId}/reviews`;
    return this.http.post<ReviewDetail>(reviewUrl, review);
  }
}
