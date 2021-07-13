import React from 'react';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './index';

test('#Button: Check onClick fn works correctly', () => {
  const onClick = jest.fn();
  const buttonText = 'Click me';
  render(<Button onClick={onClick} text={buttonText} />);
  userEvent.click(screen.getByText(buttonText));
  expect(onClick).toHaveBeenCalled();
});
