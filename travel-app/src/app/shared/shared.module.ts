import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { TitleComponent } from './components/title/title.component';
import { SearchComponent } from './components/search/search.component';

const COMPONENTS = [NavLinkComponent, TitleComponent, SearchComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  exports: [...COMPONENTS],
})
export class SharedModule {}
