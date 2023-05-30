import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTableComponent,
  },
  {
    path: 'create',
    component: CreateTripComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
