/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, it, vitest } from 'vitest';
import { OperationFun } from '../../contracts/OperationFun';

export function gte<R>(
  compare: number,
  fn: OperationFun<number, R>,
): OperationFun<number, R>;
export function gte<R>(
  compare: Date,
  fn: OperationFun<Date, R>,
): OperationFun<Date, R>;

/**
 * Executes the function if the current value is less than or equal to the compare value,
 * otherwise returns the current value.
 *
 * Only works with Date and number types.
 */
export function gte(compare: any, fn: OperationFun<any, any>) {
  return (current: any) => {
    if (typeof current !== typeof compare) {
      return current;
    }

    if (compare instanceof Date && current instanceof Date) {
      if (current.getTime() >= compare.getTime()) {
        return fn(current);
      }
      return current;
    }

    if (current >= compare) {
      return fn(current);
    }

    return current;
  };
}

describe('gte', () => {
  it('should return the current value if it is less than the compare value', () => {
    const compare = 10;
    const fn = vitest.fn();
    const op = gte(compare, fn);

    expect(op(5)).toBe(5);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should execute the function if the current value is greater than or equal to the compare value', () => {
    const compare = 10;
    const fn = vitest.fn();
    const op = gte(compare, fn);

    expect(op(10)).toBeUndefined();
    expect(fn).toHaveBeenCalledWith(10);
  });

  it('should return the current value if it is not the same type as the compare value', () => {
    const compare = 10;
    const fn = vitest.fn();
    const op = gte(compare, fn);

    // @ts-ignore
    expect(op('10')).toBe('10');
    expect(fn).not.toHaveBeenCalled();
  });

  it('should work with dates', () => {
    const compare = new Date(2020, 0, 1);
    const fn = vitest.fn();
    const op = gte(compare, fn);

    expect(op(new Date(2021, 0, 1))).toBeUndefined();
    expect(fn).toHaveBeenCalledWith(new Date(2021, 0, 1));
  });

  it('should work with dates if the values are equal', () => {
    const compare = new Date(2020, 0, 1);
    const fn = vitest.fn();
    const op = gte(compare, fn);

    expect(op(new Date(2020, 0, 1))).toBeUndefined();
    expect(fn).toHaveBeenCalledWith(new Date(2020, 0, 1));
  });

  it('should not work with dates if the types are not the same', () => {
    const compare = new Date(2020, 0, 1);
    const fn = vitest.fn();
    const op = gte(compare, fn);

    // @ts-ignore
    expect(op(2019)).toBe(2019);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should not work with dates if the values are not equal', () => {
    const compare = new Date(2020, 0, 1);
    const fn = vitest.fn();
    const op = gte(compare, fn);

    expect(op(new Date(2019, 0, 1))).toEqual(new Date(2019, 0, 1));
    expect(fn).not.toHaveBeenCalled();
  });

  it('should work with numbers', () => {
    const compare = 10;
    const fn = vitest.fn();
    const op = gte(compare, fn);

    expect(op(11)).toBeUndefined();
    expect(fn).toHaveBeenCalledWith(11);
  });

  it('should return the current value if it is not equal to or greater than the compare value', () => {
    const compare = 10;
    const fn = vitest.fn();
    const op = gte(compare, fn);

    expect(op(5)).toBe(5);
    expect(fn).not.toHaveBeenCalled();
  });
});
