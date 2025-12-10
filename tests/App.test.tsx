import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/App';

async function setNumbers(a: string, b: string) {
  const user = userEvent.setup();
  const first = screen.getByLabelText(/Перше число/i);
  const second = screen.getByLabelText(/Друге число/i);

  await user.clear(first);
  await user.type(first, a);
  await user.clear(second);
  await user.type(second, b);

  return user;
}

describe('Calculator UI', () => {
  it('adds two numbers', async () => {
    render(<App/>);
    const user = await setNumbers('2', '3');
    await user.click(screen.getByRole('button', {name: /Обчислити/i}));
    expect(screen.getByRole('status')).toHaveTextContent('5');
  });

  it('allows choosing operation: subtraction', async () => {
    render(<App/>);
    const user = await setNumbers('10', '7');
    await user.selectOptions(screen.getByLabelText(/Операція/i), '-');
    await user.click(screen.getByRole('button', {name: /Обчислити/i}));
    expect(screen.getByRole('status')).toHaveTextContent('3');
  });

  it('multiply', async () => {
    render(<App/>);
    const user = await setNumbers('6', '7');
    await user.selectOptions(screen.getByLabelText(/Операція/i), '*');
    await user.click(screen.getByRole('button', {name: /Обчислити/i}));
    expect(screen.getByRole('status')).toHaveTextContent('42');
  });

  it('divide', async () => {
    render(<App/>);
    const user = await setNumbers('9', '3');
    await user.selectOptions(screen.getByLabelText(/Операція/i), '/');
    await user.click(screen.getByRole('button', {name: /Обчислити/i}));
    expect(screen.getByRole('status')).toHaveTextContent('3');
  });

  it('shows error on divide by zero', async () => {
    render(<App/>);
    const user = await setNumbers('9', '0');
    await user.selectOptions(screen.getByLabelText(/Операція/i), '/');
    await user.click(screen.getByRole('button', {name: /Обчислити/i}));
    expect(screen.getByRole('status')).toHaveTextContent('Ділення на 0 неможливе');
  });

  it('shows error on non-numeric input', async () => {
    render(<App/>);
    const user = userEvent.setup();
    await user.clear(screen.getByLabelText(/Перше число/i));
    await user.type(screen.getByLabelText(/Перше число/i), 'abc');
    await user.type(screen.getByLabelText(/Друге число/i), '1');
    await user.click(screen.getByRole('button', {name: /Обчислити/i}));
    expect(screen.getByRole('status')).toHaveTextContent('Некоректні числа');
  });
});