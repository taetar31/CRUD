import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Stars } from './stars';

@Injectable()
export class StarsService {
  private starsUrl = 'app/stars'; // URL to web api

  constructor(private http: HttpClient) {}

  getStars() {
    return this.http
      .get<Stars[]>(this.starsUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getStarsId(id: number): Observable<Stars> {
    return this.getStars().pipe(
      map(stars => stars.find(star => star.id === id))
    );
  }

  save(stars: Stars) {
    if (stars.id) {
      return this.put(stars);
    }
    return this.post(stars);
  }

  delete(stars: Stars) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.starsUrl}/${stars.id}`;

    return this.http.delete<Stars>(url).pipe(catchError(this.handleError));
  }

  // Add new Stars
  private post(stars: Stars) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Stars>(this.starsUrl, stars)
      .pipe(catchError(this.handleError));
  }

  // Update existing Stars
  private put(stars: Stars) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.starsUrl}/${stars.id}`;

    return this.http.put<Stars>(url, stars).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
