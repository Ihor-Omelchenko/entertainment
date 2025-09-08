import { Component } from '@angular/core';
import { NavigationMenu } from '../navigation-menu/navigation-menu';


@Component({
  selector: 'app-main-layout',
  imports: [NavigationMenu],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
