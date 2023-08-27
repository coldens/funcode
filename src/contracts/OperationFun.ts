// export interface OperationFun<T, R> {
//   (source: T): R;
// }

export type OperationFun<T, R> = (source: T) => R;
