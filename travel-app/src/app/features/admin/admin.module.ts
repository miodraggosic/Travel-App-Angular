import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AdminTableComponent } from './components/admin-table/admin-table.component';

@NgModule({
  declarations: [AdminTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    AdminRoutingModule,
    MatIconModule,
  ],
})
export class AdminModule {}
