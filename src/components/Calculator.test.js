import { fireEvent, render } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  const { getByTestId, getByText } = render(<Calculator />);
  const display = getByTestId('display');

  it('clicking buttons should update result', () => {
    fireEvent.click(getByText('5'));
    expect(display.textContent).toBe('5');
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('6'));
    fireEvent.click(getByText('='));
    expect(display.textContent).toBe('11');

    fireEvent.click(getByText('AC'));
    expect(display.textContent).toBe('0');
  });
})