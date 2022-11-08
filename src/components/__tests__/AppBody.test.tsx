import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AppBody from '../AppBody';
import testValues from '../../testValue';

const { data } = testValues
it('show render app title', () => {
    render(<AppBody data={data} isPunchline />);
    const appTitle = screen.getByText(/chakra laffs/i);
    expect(appTitle).toBeInTheDocument();
});
it('should render app heading', () => {
    render(<AppBody data={data} isPunchline />);
    const appTitle = screen.getByRole("heading", { name: /chakra laffs/i });
    expect(appTitle).toBeInTheDocument();
});
