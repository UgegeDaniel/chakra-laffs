import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Buttons } from '..';
import { Content } from '..';

import testValues from '../../testValue';
const mockFxn = jest.fn()
const { data } = testValues
describe('testing the Button component', () => {
    it('should render punchline button', () => {
        render(<Buttons
            fetchData={mockFxn}
            isPunchline
            setIsPunchline={mockFxn}
        />);
        const hidePunchline = screen.getByRole("button", {name: /Hide Punchline/i});
        expect(hidePunchline).toBeInTheDocument();
    });
    it('should render another joke button', () => {
        render(<Buttons
            fetchData={mockFxn}
            isPunchline
            setIsPunchline={mockFxn}
        />);
        const anotherJoke = screen.getByRole("button", {name: /Another Joke/i});
        expect(anotherJoke).toBeInTheDocument();
    });

    it('button text should be hide puncline', () => {
        render(<Buttons
            fetchData={mockFxn}
            isPunchline={false}
            setIsPunchline={mockFxn}
        />);
        const seePunchline = screen.getByRole("button", {name: /See Punchline/i});
        expect(seePunchline).toBeInTheDocument();
    });
})