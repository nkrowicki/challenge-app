import React from 'react';

import { render } from '@testing-library/react';

import NoData from './index';

test('Check that NoData component shows correctly', () => {
  const { container } = render(<NoData />);
  expect(container.firstChild).toMatchSnapshot();
});
