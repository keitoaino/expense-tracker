import { IOption } from '../interfaces/options.interface';

export function mapToOptions(map: Map<string | number, string>): IOption[] {
  return Array.from(map.entries()).map(option => ({
    key: option[0],
    value: option[1],
  }));
}
