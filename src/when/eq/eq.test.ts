import { describe, expect, it, vitest } from 'vitest';
import { createPipe } from '../../pipe/createPipe';
import { eq } from './eq';

describe('eq', () => {
  it('should be a function', () => {
    expect(typeof eq).toBe('function');
  });

  it('should return a function', () => {
    expect(typeof eq(1, vitest.fn())).toBe('function');
  });

  it('should call the function if the values are equal', () => {
    const fn = vitest.fn();
    const exp = eq(1, fn);
    exp(1);
    expect(fn).toHaveBeenCalled();
  });

  it('should not call the function if the values are not equal', () => {
    const fn = vitest.fn();
    eq(1, fn)(2);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should return the value if the values are not equal', () => {
    expect(eq(1, vitest.fn())(2)).toBe(2);
  });

  it('should work in pipe', () => {
    const equal5 = eq(5, () => 'hello world');
    const equal1 = eq(1, () => 'nothing...');
    const piping = createPipe(equal5, equal1);
    expect(piping(5)).toBe('hello world');
  });
});
