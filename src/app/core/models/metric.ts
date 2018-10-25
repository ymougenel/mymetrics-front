import { defaults } from 'lodash';

export class Metric {

  static readonly DEFAULT_METRIC: Partial<Metric> = {
    id: 0,
    type: 'tmp',
    value: 42,
    date: '2018-10-25T16:54:09.437Z'
  };

  readonly id: number;
  type: string;
  date: string;
  value: any;

  constructor(copy ?: Partial<Metric>) {
    defaults(this, copy, Metric.DEFAULT_METRIC);
  }
}
