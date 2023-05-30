import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { TripsRoutingModule } from './trips-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomepageComponent } from './components/homepage/homepage.component';
import { TripsComponent } from './components/trips/trips.component';
import { TripComponent } from './components/trip/trip.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { TripOverviewComponent } from './components/trip-overview/trip-overview.component';

@NgModule({
  declarations: [
    TripsComponent,
    HomepageComponent,
    TripComponent,
    TripCardComponent,
    TripOverviewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    TripsRoutingModule,
  ],
})
export class TripsModule {}
