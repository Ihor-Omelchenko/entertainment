import { GetListMovies } from './commands';
import { MediaApiService } from './services';
import { MediaStore } from './store';

export function providerEngineMedia() {
  return [
    GetListMovies,
    MediaApiService,
    MediaStore
  ]
}
