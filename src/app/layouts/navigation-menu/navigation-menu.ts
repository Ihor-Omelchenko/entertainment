import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.html',
  styleUrl: './navigation-menu.scss',
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class NavigationMenu {

}
