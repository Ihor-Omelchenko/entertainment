import { inject, Injectable } from '@angular/core';
import { MediaApiService } from '../services';
import { MediaStore } from '../store';
import { finalize, tap } from 'rxjs';
import { MediaMapper } from '../mappers';

@Injectable()
export class GetListMovies {
  private readonly mediaStore: MediaStore = inject(MediaStore);
  private readonly mediaApiService: MediaApiService = inject(MediaApiService);

  execute(page: number): void {
    this.mediaStore.loading.set(true);

    this.mediaApiService.getMovies(page).pipe(
      tap(response =>  {
        this.mediaStore.data.set(response.results.map(MediaMapper.toMedia));
      }),
      finalize(() => {
        this.mediaStore.loading.set(true);
      })
    ).subscribe();
  }
}
