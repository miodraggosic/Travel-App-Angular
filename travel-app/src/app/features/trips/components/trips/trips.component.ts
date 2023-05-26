import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips.service';
import { take } from 'rxjs';
import { Trip } from 'src/app/models/interfaces/trip.interface';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  public trips: Trip[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.getTrips(), console.log(this.trips);
  }

  getTrips(): void {
    this.tripsService
      .getTrips()
      .pipe(take(1))
      .subscribe((data) => (this.trips = data));
  }
}
