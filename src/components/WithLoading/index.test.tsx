import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import WithLoading from './index';

describe('#WithLoading', () => {
  test('When isLoading is true: not show children', async () => {
    const text = 'Text test 01';
    render(
      <WithLoading isLoading error={null}>
        <p>{text}</p>
      </WithLoading>
    );
    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });

  test('When isLoading is false: show children', async () => {
    const text = 'Text test 01';
    render(
      <WithLoading isLoading={false} error={null}>
        <p>{text}</p>
      </WithLoading>
    );
    expect(screen.queryByText(text)).toBeInTheDocument();
  });

  test('When there is error: show error and not show children', async () => {
    const text = 'Text test 01';
    const textError = 'Errortext';
    render(
      <WithLoading isLoading={false} error={textError}>
        <p>{text}</p>
      </WithLoading>
    );
    expect(screen.queryByText(text)).not.toBeInTheDocument();
    expect(
      screen.getByText('An error has occurred: Errortext')
    ).toBeInTheDocument();
  });
});
