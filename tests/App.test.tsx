import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from "../src/App";

describe('Calculator', () => {
  it('adds two numbers', async () => {
    render(<App />);
    const user = userEvent.setup();

    await user.clear(screen.getByLabelText(/Перше число/i));
    await user.type(screen.getByLabelText(/Перше число/i), '2');

    await user.clear(screen.getByLabelText(/Друге число/i));
    await user.type(screen.getByLabelText(/Друге число/i), '3');

    await user.click(screen.getByRole('button', { name: /Обчислити/i }));

    expect(screen.getByRole('status')).toHaveTextContent('5');
  });
});
