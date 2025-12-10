
export type Op = '+' | '-' | '*' | '/';

export function calculate(aStr: string, bStr: string, op: Op): string {
  const x = Number.parseFloat(aStr);
  const y = Number.parseFloat(bStr);
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return 'Некоректні числа';
  }

  switch (op) {
    case '+': return String(x + y);
    case '-': return String(x - y);
    case '*': return String(x * y);
    case '/':
      return y === 0 ? 'Ділення на 0 неможливе' : String(x / y);
    default:
      // TS exhaustiveness guard; never in practice
      return 'Некоректні числа';
  }
}
