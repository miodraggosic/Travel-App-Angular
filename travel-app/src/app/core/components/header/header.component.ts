import { Component, OnInit } from '@angular/core';
import { NavLinks } from 'src/app/models/enums/nav-links.enum';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navLinks: string[] = Object.values(NavLinks);

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  public logout(): void {
    this.auth.logout();
  }
}
