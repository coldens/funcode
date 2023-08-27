/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, expect, it, vitest } from 'vitest';
import { gt } from './gt';

describe('gt', () => {
  it('should be a function', () => {
    expect(gt).toBeTypeOf('function');
  });

  it('should return a function', () => {
    expect(gt(0, vitest.fn())).toBeTypeOf('function');
  });

  it('should call the function if the value is greater than the compare value', () => {
    const fn = vitest.fn((x: number) => x);
    const exp = gt(1, fn);
    exp(2);
    expect(fn).toHaveBeenCalled();
  });

  it('should not call the function if the value is not greater than the compare value', () => {
    const fn = vitest.fn((x: number) => x);
    gt(1, fn)(1);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should return the value if the value is not greater than the compare value', () => {
    const gt10 = gt(10, (val) => val);
    expect(gt10(5)).toBe(5);
  });

  it('should work with dates', () => {
    const fn = vitest.fn((x: Date) => x);
    const exp = gt(new Date(2020, 0, 1), fn);
    exp(new Date(2021, 0, 1));
    expect(fn).toHaveBeenCalled();
  });

  it('should not work with dates if the types are not the same', () => {
    const fn = vitest.fn((x: Date) => x);
    const exp = gt(new Date(2020, 0, 1), fn);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exp(2019);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should not work with dates if the values are not equal', () => {
    const fn = vitest.fn((x: Date) => x);
    const exp = gt(new Date(2020, 0, 1), fn);
    exp(new Date(2020, 0, 1));
    expect(fn).not.toHaveBeenCalled();
  });

  it('should work with numbers', () => {
    const fn = vitest.fn((x: number) => x);
    const exp = gt(10, fn);
    exp(11);
    expect(fn).toHaveBeenCalled();
  });

  it('should not work with numbers if the types are not the same', () => {
    const fn = vitest.fn((x: number) => x);
    const exp = gt(10, fn);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exp('10');
    expect(fn).not.toHaveBeenCalled();
  });

  it('should not work with numbers if the values are not equal', () => {
    const fn = vitest.fn((x: number) => x);
    const exp = gt(10, fn);
    exp(10);
    expect(fn).not.toHaveBeenCalled();
  });
});
