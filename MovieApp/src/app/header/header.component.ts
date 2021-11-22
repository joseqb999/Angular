import { Component, Input, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { User } from '../models';
import { AuthenticationService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  get isAdmin() {
    return this.user && this.user.role === "Admin";
}
  logout() {
    this.authenticationService.logout();
}

}
