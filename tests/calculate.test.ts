
import { calculate } from '../src/calculate';

describe('calculate (pure)', () => {
  it('adds', () => {
    expect(calculate('2', '3', '+')).toBe('5');
  });

  it('subtracts', () => {
    expect(calculate('10', '4', '-')).toBe('6');
  });

  it('multiplies', () => {
    expect(calculate('6', '7', '*')).toBe('42');
  });

  it('divides', () => {
    expect(calculate('9', '3', '/')).toBe('3');
  });

  it('handles divide by zero', () => {
    expect(calculate('9', '0', '/')).toBe('Ділення на 0 неможливе');
  });

  it('handles non-numeric input (a)', () => {
    expect(calculate('abc', '1', '+')).toBe('Некоректні числа');
  });

  it('handles non-numeric input (b)', () => {
    expect(calculate('1', 'abc', '+')).toBe('Некоректні числа');
  });

  it('supports decimals and negatives', () => {
    expect(calculate('-1.5', '0.5', '+')).toBe('-1');
  });
});
