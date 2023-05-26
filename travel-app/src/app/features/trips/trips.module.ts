import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { TripsRoutingModule } from './trips-routing.module';

import { MatIconModule } from '@angular/material/icon';

import { HomepageComponent } from './components/homepage/homepage.component';
import { TripsComponent } from './components/trips/trips.component';

@NgModule({
  declarations: [TripsComponent, HomepageComponent],
  imports: [CommonModule, SharedModule, MatIconModule, TripsRoutingModule],
})
export class TripsModule {}
