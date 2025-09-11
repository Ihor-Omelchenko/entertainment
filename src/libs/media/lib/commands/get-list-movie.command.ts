import { inject, Injectable } from '@angular/core';
import { MediaApiService } from '../services';
import { MediaStore } from '../store';
import { finalize, tap } from 'rxjs';
import { MovieMapper } from '../mappers';

@Injectable()
export class GetListMovies {
  private readonly mediaStore: MediaStore = inject(MediaStore);
  private readonly mediaApiService: MediaApiService = inject(MediaApiService);

  execute(page: number): void {
    this.mediaStore.loading.set(true);

    this.mediaApiService.getMovies(page).pipe(
      tap(response =>  {
        this.mediaStore.data.set(response.results.map(MovieMapper.toMovie));
      }),
      finalize(() => {
        this.mediaStore.loading.set(true);
      })
    ).subscribe();
  }
}
