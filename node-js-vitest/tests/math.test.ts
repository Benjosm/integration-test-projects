// math.test.ts
import { describe, expect, it } from 'vitest';
import { add } from '../src/math';

describe('add function', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add negative numbers', () => {
    expect(add(-1, -2)).toBe(3);
  });

  it('should handle zero values', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });
});
