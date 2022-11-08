import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AppBody from '../components/AppBody';
import testValues from '../testValue';

const { data } = testValues
it('renders app title', () => {
    render(<AppBody data={data} isPunchline />);
    const appTitle = screen.getByText(/chakra laffs/i);
    expect(appTitle).toBeInTheDocument();
});
