import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTableComponent } from './components/admin-table/admin-table.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
