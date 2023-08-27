import { OperationFun } from '../../contracts/OperationFun';

export function lt<R>(
  compare: number,
  fn: OperationFun<number, R>,
): OperationFun<number, R>;
export function lt<R>(
  compare: Date,
  fn: OperationFun<Date, R>,
): OperationFun<Date, R>;

/**
 * Executes the function if the current value is less than the compare value,
 * otherwise returns the current value.
 *
 * Only works with Date and number types.
 */
export function lt(compare: any, fn: OperationFun<any, any>) {
  return (current: any) => {
    if (typeof current !== typeof compare) {
      return current;
    }

    if (compare instanceof Date && current instanceof Date) {
      if (current.getTime() < compare.getTime()) {
        return fn(current);
      }
      return current;
    }

    if (current < compare) {
      return fn(current);
    }

    return current;
  };
}
