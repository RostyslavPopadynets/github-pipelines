import { useState } from 'react';
import './App.css';

type Op = '+' | '-' | '*' | '/'

function App() {
  const [a, setA] = useState<string>('0');
  const [b, setB] = useState<string>('0');
  const [op, setOp] = useState<Op>('+');
  const [result, setResult] = useState<string>('');

  const compute = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (Number.isNaN(x) || Number.isNaN(y)) {
      setResult('Некоректні числа');
      return;
    }
    let r: number | string;
    switch (op) {
      case '+': r = x + y; break;
      case '-': r = x - y; break;
      case '*': r = x * y; break;
      case '/':
        if (y === 0) r = 'Ділення на 0 неможливе';
        else r = x / y;
        break;
    }
    setResult(String(r));
  };

  return (
    <main style={{ maxWidth: 420, margin: '40px auto', padding: 16 }}>
      <h1>GitHub pipelines — калькулятор</h1>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 12 }}>
        <input
          aria-label="Перше число"
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          style={{ width: 120 }}
        />
        <select aria-label="Операція" value={op} onChange={(e) => setOp(e.target.value as Op)}>
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          aria-label="Друге число"
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          style={{ width: 120 }}
        />
        <button onClick={compute}>Обчислити</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <strong>Результат:</strong> <span role="status">{result}</span>
      </div>
    </main>
  );
}

export default App;
