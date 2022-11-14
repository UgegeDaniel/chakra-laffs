import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Content } from '..';
import testValues from '../../testValue';

const { data } = testValues;
describe('testing the Content component', () => {
  it('should render joke setup', () => {
    render(<Content
      data={data}
      isPunchline
    />);
    const joke = screen.queryByTestId('joke');
    expect(joke).toBeInTheDocument();
  });
  it('should render punchline if isPuncline is true', () => {
    render(<Content
      data={data}
      isPunchline
    />);
    const punchline = screen.queryByTestId('punchline');
    expect(punchline).toBeInTheDocument();
  });
  it('should not render punchline if isPunchline is false', () => {
    render(<Content
      data={data}
      isPunchline={false}
    />);
    const punchline = screen.queryByTestId('punchline');
    expect(punchline).not.toBeInTheDocument();
  });
});
