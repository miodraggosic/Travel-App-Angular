import { Trip } from './../../../models/interfaces/trip.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripsService {
  private readonly tripsUrl: string = `${environment.baseApiUrl}/trips`;

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.tripsUrl}`).pipe(retry(2));
  }
}
