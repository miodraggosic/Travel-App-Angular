import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { TitleComponent } from './components/title/title.component';

const COMPONENTS = [NavLinkComponent, TitleComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
