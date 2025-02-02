// src/sum.test.ts
import { sum } from './sum';

describe('sum function', () => {
  it('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 5)).toBe(4);
    expect(sum(0, 0)).toBe(0);
  });

  it('handles decimal numbers', () => {
    expect(sum(1.5, 2.5)).toBe(4);
    expect(sum(-1.1, 2.1)).toBeCloseTo(1.0);
  });

  // Should fail
  it('handles negative numbers', () => {
    expect(sum(1, -1)).toBe(0);
    expect(sum(-1, 5)).toBe(0);
  });
});