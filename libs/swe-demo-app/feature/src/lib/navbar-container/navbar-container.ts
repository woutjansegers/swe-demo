import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Navbar, NavItem} from '@swe-demo/swe-demo-app-ui'

@Component({
  selector: 'lib-swe-demo-app-feature-navbar-container',
  imports: [Navbar, RouterModule],
  templateUrl: './navbar-container.html',
  styleUrl: './navbar-container.css',
})
export class NavbarContainer {
  readonly items: NavItem[] = [
    {
      label: "Home", path: "/"
    },
    {
      label: "Products", path: "/products"
    },
    {
      label: "Account", path: "/account"
    }
  ]

  onLogout() {
    console.log("TODO: logging out logic");
  }

  onNavigate(path: string) {
    console.log("navigate to" , path);
  }
}
