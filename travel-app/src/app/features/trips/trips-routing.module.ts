import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { TripsComponent } from './components/trips/trips.component';
import { TripOverviewComponent } from './components/trip-overview/trip-overview.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'trips',
    component: TripsComponent,
  },
  {
    path: 'trips/:id',
    component: TripOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsRoutingModule {}
