import { Component, inject } from '@angular/core';
import { MediaFacade } from '../../../../libs/media/lib/media.facade';
import { MediaStore } from '../../../../libs/media/lib/store';
import { Card } from '../../../shared/components';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private readonly mediaFacade: MediaFacade = inject(MediaFacade);

  protected readonly mediaStore: MediaStore = inject(MediaStore);

  constructor() {
    this.mediaFacade.getListMovies();
  }
}
