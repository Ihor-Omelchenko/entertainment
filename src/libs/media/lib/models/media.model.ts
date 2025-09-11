import { MovieBaseInterface, TvBaseInterface } from '../interfaces';

export class Media {

  constructor(protected readonly dto: MovieBaseInterface | TvBaseInterface) {}

  get id(): number {
    return this.dto.id;
  }

  get type(): 'movie' | 'tv' {
    return 'title' in this.dto ? 'movie' : 'tv';
  }

  get title(): string {
    return 'title' in this.dto ? this.dto.title : this.dto.name;
  }

  get releaseDate(): string {
    return 'release_date' in this.dto
      ? this.dto.release_date
      : this.dto.first_air_date;
  }

  get image(): string {
    return `https://image.tmdb.org/t/p/w342${this.dto.backdrop_path}`;
  }
}
