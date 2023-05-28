import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Trip } from 'src/app/models/interfaces/trip.interface';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  @Input() searchTerm: string = '';
  public trips: Trip[] = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  public onSearchValue(event: string) {
    this.searchTerm = event;
    this.getFiltered();
  }

  private getTrips(): void {
    this.tripsService
      .getTrips()
      .pipe(take(1))
      .subscribe((data: Trip[]) => (this.trips = data));
  }
  private getFiltered() {
    this.tripsService
      .getFiltered(this.searchTerm)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);

        this.trips = data;
      });
  }
}
