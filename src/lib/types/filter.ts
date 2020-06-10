interface OptionUnit {key: any, value: string}

export interface Filter<T> {
  type: string;
  func: (a: T, b: any[]) => boolean;
  options?: OptionUnit[];
}
