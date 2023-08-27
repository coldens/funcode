import { OperationFun } from '../../contracts/OperationFun';

export function gt<R>(
  compare: number,
  fn: OperationFun<number, R>,
): OperationFun<number, R>;
export function gt<R>(
  compare: Date,
  fn: OperationFun<Date, R>,
): OperationFun<Date, R>;

export function gt(compare: any, fn: OperationFun<any, any>) {
  return (current: any) => {
    if (typeof current !== typeof compare) {
      return current;
    }

    if (compare instanceof Date && current instanceof Date) {
      if (current.getTime() > compare.getTime()) {
        return fn(compare);
      }
      return current;
    }

    if (current > compare) {
      return fn(compare);
    }

    return current;
  };
}
