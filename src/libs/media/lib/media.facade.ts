import { inject, Injectable, WritableSignal } from '@angular/core';
import { GetListMovies } from './commands';
import { MediaStore } from './store';
import { Media } from './models';

@Injectable({providedIn: 'root'})
export class MediaFacade {
  private readonly mediaStore: MediaStore = inject(MediaStore);
  private readonly listMovie: GetListMovies = inject(GetListMovies);

  data: WritableSignal<Array<Media>> = this.mediaStore.data;

  getListMovies(page = 1): void {
    this.listMovie.execute(page);
  }
}
