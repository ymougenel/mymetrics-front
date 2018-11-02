import { defaults } from 'lodash';

export class Tracker {

  static readonly DEFAULT_METRIC: Partial<Tracker> = {
    id: 0,
    name: '',
  };

  readonly id: number;
  name: string;

  constructor(copy ?: Partial<Tracker>) {
    defaults(this, copy, Tracker.DEFAULT_METRIC);
  }

}
