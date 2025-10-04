import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayout } from './layouts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
