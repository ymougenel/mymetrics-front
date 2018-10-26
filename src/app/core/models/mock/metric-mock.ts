import { Metric } from '../metric';

export function getMockList(): Metric[] {

  const energy: Metric = new Metric({type: 'energy', value: 3});
  const sportDone: Metric = new Metric({type: 'sport', value: 0});
  return [energy, sportDone];
}
