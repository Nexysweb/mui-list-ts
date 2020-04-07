export interface Filter<T, K> {
  type: string;
  func: (a: T, b: any[]) => boolean;
  options: K[];
}
