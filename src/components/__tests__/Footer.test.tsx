import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Footer } from '..';
import testValues from '../../testValue';

const { data } = testValues
it('should render author name', () => {
    render(<Footer data={data} />);
    const author = screen.getByText(/ugegedaniel/i);
    expect(author).toBeInTheDocument();
});
it('should render joke category', () => {
    render(<Footer data={data} />);
    const author = screen.getByText(data.category);
    expect(author).toBeInTheDocument();
});