import { defaults } from 'lodash';

export class Metric {

  static readonly DEFAULT_METRIC: Partial<Metric> = {
    id: 0,
    type: 'tmp',
    value: 42,
    date: new Date('2018-10-25T16:54:09.437Z')
  };

  readonly id: number;
  type: string;
  date: Date;
  value: any;

  constructor(copy ?: Partial<Metric>) {
    defaults(this, copy, Metric.DEFAULT_METRIC);
  }

  isNumber(): boolean {
    return typeof this.value === 'number';
  }

  isBoolean(): boolean {
    return typeof this.value === 'boolean';
  }

  isString(): boolean {
    return typeof this.value === 'string';
  }
}
