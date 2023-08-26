import { describe, expect, it } from 'vitest';
import { pipe } from './pipe';

describe('pipe', () => {
  it('should return value if no functions are passed', () => {
    const result = pipe('Hello world!');
    expect(result).toBe('Hello world!');
  });

  it('should pipe value', () => {
    const result = pipe(1, (x) => x + 1);
    expect(result).toBe(2);
  });

  it('should pipe value through multiple functions', () => {
    const result = pipe(
      1,
      (x) => x + 1,
      (x) => x * 2,
    );
    expect(result).toBe(4);
  });

  it('should pipe value through multiple functions with different types', () => {
    const result = pipe(
      1,
      (x) => x + 1,
      (x) => `${x}`,
    );
    expect(result).toBe('2');
    expect(typeof result).toBe('string');
  });

  it('should pipe value through multiple functions with different types', () => {
    const result = pipe(
      1,
      (x) => x + 1,
      (x) => `${x}`,
      (x) => x.length,
    );
    expect(result).toBe(1);
    expect(typeof result).toBe('number');
  });
});
