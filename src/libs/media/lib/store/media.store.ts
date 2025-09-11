import { Injectable, signal, WritableSignal } from '@angular/core';
import { Media } from '../models';

@Injectable()
export class MediaStore {
  data: WritableSignal<Array<Media>> = signal([]);
  loading: WritableSignal<boolean> = signal(false);
}
