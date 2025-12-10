
import { useState } from 'react';
import './App.css';
import { calculate, type Op } from './calculate';

function App() {
  const [a, setA] = useState<string>('0');
  const [b, setB] = useState<string>('0');
  const [op, setOp] = useState<Op>('+');
  const [result, setResult] = useState<string>('');

  const compute = () => setResult(calculate(a, b, op));

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
        <strong>Результат:</strong>
        <output name="result">{result}</output>
      </div>
    </main>
  );
}

export default App;
