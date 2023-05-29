import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { TripsService } from 'src/app/features/trips/services/trips.service';
import { Trip } from 'src/app/models/interfaces/trip.interface';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  public trips: Trip[] = [];

  columns = [
    {
      columnDef: 'row',
      header: 'row',
      cell: (trip: Trip) => `${trip.id}`,
    },
    {
      columnDef: 'image',
      header: 'Image',
      cell: (trip: Trip) => `${trip.imageUrl}`,
    },
    {
      columnDef: 'title',
      header: 'Title',
      cell: (trip: Trip) => `${trip.title}`,
    },
    {
      columnDef: 'country',
      header: 'Country',
      cell: (trip: Trip) => `${trip.countryId}`,
    },
    {
      columnDef: 'price',
      header: 'Price',
      cell: (trip: Trip) => `${trip.price}`,
    },
    {
      columnDef: 'fromDate',
      header: 'From Date',
      cell: (trip: Trip) => `${trip.fromDate}`,
    },
    {
      columnDef: 'toDate',
      header: 'To Date',
      cell: (trip: Trip) => `${trip.toDate}`,
    },
    {
      columnDef: 'edit',
      header: 'Edit',
      cell: (trip: Trip) => `${trip.id}`,
    },
    {
      columnDef: 'delete',
      header: 'Delete',
      cell: (trip: Trip) => `${trip.id}`,
    },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    this.tripsService
      .getTrips()
      .pipe(take(1))
      .subscribe((data) => (this.trips = data));
  }
}
