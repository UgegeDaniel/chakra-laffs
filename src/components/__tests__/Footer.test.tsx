import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Footer } from '..';
import testValues from '../../testValue';

const { data } = testValues
describe('testing the footer component', () => {
    it('should render author name', () => {
        render(<Footer data={data} />);
        const author = screen.getByText(/ugegedaniel/i);
        expect(author).toBeInTheDocument();
    });
    it('should render joke category', () => {
        render(<Footer data={data} />);
        const category = screen.getByText(data.category);
        expect(category).toBeInTheDocument();
    });
})
// it('should not render joke category', () => {
//     render(<Footer/>);
//     const category = screen.getByText(data.category);
//     expect(category).not.toBeInTheDocument();
// });