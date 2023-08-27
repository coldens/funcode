import { describe, expect, it, vitest } from 'vitest';
import { lte } from './lte';

describe('lte', () => {
  it('should be a function', () => {
    expect(lte).toBeTypeOf('function');
  });

  it('should return a function', () => {
    expect(lte(0, vitest.fn())).toBeTypeOf('function');
  });

  it('should call the function if the value is less than the compare value', () => {
    const fn = vitest.fn((x: number) => x);
    const exp = lte(1, fn);
    exp(0);
    expect(fn).toHaveBeenCalled();
  });

  it('should call the function if the value is equal to the compare value', () => {
    const fn = vitest.fn((x: number) => x);
    const exp = lte(1, fn);
    exp(1);
    expect(fn).toHaveBeenCalled();
  });

  it('should not call the function if the value is not less than the compare value', () => {
    const fn = vitest.fn((x: number) => x);
    lte(1, fn)(2);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should return the value if the value is not less than the compare value', () => {
    expect(lte(10, vitest.fn())(20)).toBe(20);
  });

  it('should work with dates', () => {
    const fn = vitest.fn((x: Date) => x);
    const exp = lte(new Date(2020, 0, 1), fn);
    exp(new Date(2019, 0, 1));
    expect(fn).toHaveBeenCalled();
  });

  it('should work with dates if the values are equal', () => {
    const fn = vitest.fn((x: Date) => x);
    const exp = lte(new Date(2020, 0, 1), fn);
    exp(new Date(2020, 0, 1));
    expect(fn).toHaveBeenCalled();
  });

  it('should not work with dates if the types are not the same', () => {
    const fn = vitest.fn((x: Date) => x);
    const exp = lte(new Date(2020, 0, 1), fn);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    exp(2019);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should not work with dates if the values are not equal', () => {
    const fn = vitest.fn((x: Date) => x);
    const exp = lte(new Date(2020, 0, 1), fn);
    exp(new Date(2020, 1, 1));
    expect(fn).not.toHaveBeenCalled();
  });
});
