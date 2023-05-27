import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Trip } from 'src/app/models/interfaces/trip.interface';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  public trips: Trip[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  getTrips(): void {
    this.tripsService
      .getTrips()
      .pipe(take(1))
      .subscribe((data: Trip[]) => (this.trips = data));
  }
}
