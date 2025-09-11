import { MovieBaseInterface } from '../interfaces/movie';
import { Media } from '../models';


export class MovieMapper {
  static toMovie(dto: MovieBaseInterface): Media {
    return new Media(dto);
  }
}
