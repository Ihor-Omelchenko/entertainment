import { Routes } from '@angular/router';
import { Home } from './home/pages/home/home';
import { Movie } from './movie/pages/movie/movie';
import { TvSeries } from './tv-series/pages/tv-series/tv-series';
import { Bookmark } from './bookmark/pages/bookmark/bookmark';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'movies',
    component: Movie
  },
  {
    path: 'tv-series',
    component: TvSeries,
  },
  {
    path: 'bookmarks',
    component: Bookmark
  }
];
