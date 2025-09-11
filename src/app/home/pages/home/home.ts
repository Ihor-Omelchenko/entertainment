import { Component, effect, inject } from '@angular/core';
import { MediaFacade } from '../../../../libs/media/lib/media.facade';
import { MediaStore } from '../../../../libs/media/lib/store';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private readonly mediaStore: MediaStore = inject(MediaStore);
  private readonly mediaFacade: MediaFacade = inject(MediaFacade);

  constructor() {
    this.mediaFacade.getListMovies();

    effect(() => {
      if (this.mediaStore.data().length) {
        console.log('getPopularMovie', this.mediaStore.data());
      }
    })
  }
}
