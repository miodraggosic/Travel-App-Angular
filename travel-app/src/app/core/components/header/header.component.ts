import { Component, OnInit } from '@angular/core';
import { NavLinks } from 'src/app/models/enums/nav-links.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navLinks: string[] = Object.values(NavLinks);

  constructor() {}

  ngOnInit(): void {}
}
