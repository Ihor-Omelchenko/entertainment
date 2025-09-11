import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MediaApiService {
  private readonly http: HttpClient = inject(HttpClient);

  getMovies(page: number): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/movie/popular?language=uk-UA&page=${page}`
    );
  }
}
