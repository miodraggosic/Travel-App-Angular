import { Trip } from './../../../models/interfaces/trip.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private readonly tripsUrl: string = `${environment.baseApiUrl}trips`;

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.tripsUrl}`).pipe(retry(2));
  }

  getById(id: number): Observable<Trip> {
    return this.http
      .get<Trip>(`${this.tripsUrl}/${id}`)
      .pipe(catchError((err) => of(err)));
  }
  getFiltered(term: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.tripsUrl}?title_like=${term}`);
  }
}
