interface OptionUnit {
  key: any;
  value: string;
}

export interface Filter<T> {
  type: string;
  func: (dataRow: T, value: any) => boolean;
  options?: OptionUnit[];
}
