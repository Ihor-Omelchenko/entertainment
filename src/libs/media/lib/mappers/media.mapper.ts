import { MovieBaseInterface, TvBaseInterface } from '../interfaces';
import { Media } from '../models';

export class MediaMapper {
  static toMedia(dto: MovieBaseInterface | TvBaseInterface): Media {
    return new Media(dto);
  }
}
