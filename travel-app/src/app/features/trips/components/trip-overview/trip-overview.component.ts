import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/models/interfaces/trip.interface';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trip-overview',
  templateUrl: './trip-overview.component.html',
  styleUrls: ['./trip-overview.component.scss'],
})
export class TripOverviewComponent implements OnInit {
  public trip!: Observable<Trip>;

  private tripId!: number;

  constructor(
    private tripsService: TripsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trip = this.getTrip();
  }

  private getTrip() {
    this.getRouteId();
    return this.tripsService.getById(this.tripId);
  }

  private getRouteId(): void {
    this.tripId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
