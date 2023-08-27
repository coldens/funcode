import { describe, expect, it } from 'vitest';
import { createPipe } from './createPipe';

describe('createPipe', () => {
  it('should return value if no functions are passed', () => {
    const emptyPipe = createPipe();
    const result = emptyPipe('Hello world!');
    expect(result).toBe('Hello world!');
  });

  it('should pipe value', () => {
    const sumOne = createPipe((x: number) => x + 1);
    const result = sumOne(1);
    expect(result).toBe(2);
  });

  it('should pipe value through multiple functions', () => {
    const twoOperations = createPipe(
      (x: number) => x + 1,
      (x: number) => x * 2,
    );
    const result = twoOperations(1);
    expect(result).toBe(4);
  });

  it('should pipe value through multiple functions with different types', () => {
    const twoOperations = createPipe(
      (x: number) => x + 1,
      (x: number) => `${x}`,
    );
    const result = twoOperations(1);
    expect(result).toBe('2');
    expect(typeof result).toBe('string');
  });

  it('should infer type of last operation', () => {
    const twoOperations = createPipe(
      (x: number) => x + 1,
      (x: number) => `${x}`,
      (x) => {
        expect(typeof x).toBe('string');
        return x.length;
      },
    );
    const result = twoOperations(1);
    expect(result).toBe(1);
    expect(typeof result).toBe('number');
  });
});
