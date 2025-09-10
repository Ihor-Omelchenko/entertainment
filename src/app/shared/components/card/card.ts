import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  data: InputSignal<any> = input.required();
}
