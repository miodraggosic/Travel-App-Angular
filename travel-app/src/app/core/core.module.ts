import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const COMPONENTS = [HeaderComponent, FooterComponent, HomeLayoutComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [...COMPONENTS],
})
export class CoreModule {}
