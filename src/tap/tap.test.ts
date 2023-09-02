import { describe, expect, it, vitest } from 'vitest';
import { tap } from './tap';

describe('tap', () => {
  it('should be a function', () => {
    expect(typeof tap).toBe('function');
  });

  it('should return a function', () => {
    expect(typeof tap(() => {})).toBe('function');
  });

  it('should call the side effect function', () => {
    const sideEffect = vitest.fn((value: string) => console.log(value));
    const tapFn = tap(sideEffect);
    tapFn('foo');
    expect(sideEffect).toHaveBeenCalledWith('foo');
  });

  it('should return the current value', () => {
    const tapFn = tap(() => {});
    expect(tapFn('foo')).toBe('foo');
  });

  it('should not mutate the current value', () => {
    const tapFn = tap((value: string) => {
      value += 'bar';
      return value;
    });
    expect(tapFn('foo')).toBe('foo');
  });
});
