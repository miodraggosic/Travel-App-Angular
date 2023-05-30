import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { CreateTripComponent } from './components/create-trip/create-trip.component';
import { AdminGuard } from 'src/app/core/auth/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AdminGuard],
    component: AdminTableComponent,
  },
  {
    path: 'create',
    canActivate: [AdminGuard],
    component: CreateTripComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
