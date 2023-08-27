import { OperationFun } from '../../contracts/OperationFun';

/**
 * Executes the function if the current value is equal to the compare value,
 * otherwise returns the current value.
 *
 * It uses strict equality (===).
 */
export function eq<T, R, C extends T>(expect: T, fn: OperationFun<T, R>) {
  return (current: C) => {
    if (current === expect) {
      return fn(current);
    }
    return current;
  };
}
