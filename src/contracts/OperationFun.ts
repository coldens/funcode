export interface OperationFun<T, R> {
  (source: T): R;
}
