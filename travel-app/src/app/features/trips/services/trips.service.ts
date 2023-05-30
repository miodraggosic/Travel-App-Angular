import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, catchError, of, retry } from 'rxjs';
import { Country } from 'src/app/models/interfaces/country.interface';
import { Trip } from './../../../models/interfaces/trip.interface';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private readonly tripsUrl: string = `${environment.baseApiUrl}trips`;
  private readonly countryUrl: string = `${environment.baseApiUrl}countries`;

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http
      .get<Trip[]>(`${this.tripsUrl}`)
      .pipe(retry(2), catchError(this.handleError('Get Trips', [])));
  }

  getById(id: number): Observable<Trip> {
    return this.http
      .get<Trip>(`${this.tripsUrl}/${id}`)
      .pipe(catchError(this.handleError<Trip>('Get Trip')));
  }
  getFiltered(term: string): Observable<Trip[]> {
    return this.http
      .get<Trip[]>(`${this.tripsUrl}?title_like=${term}`)
      .pipe(catchError(this.handleError('Get Filtered', [])));
  }

  getCountries(): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.countryUrl}`)
      .pipe(retry(2), catchError(this.handleError('Get Countries', [])));
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http
      .post<Trip>(`${this.tripsUrl}`, trip)
      .pipe(catchError(this.handleError<Trip>('Add Trip')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error.message);
      return of(result as T);
    };
  }
}
