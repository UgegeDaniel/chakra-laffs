import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AppBody from '../AppBody';
import testValues from '../../testValue';
const mockFxn = jest.fn()

const { data } = testValues
describe("testing the AppBody component", () => {
    it('should render app heading', () => {
        render(<AppBody
            isLoading={false}
            data={data}
            isPunchline
            setIsPunchline={mockFxn}
            fetchData={mockFxn}
        />);
        const appTitle = screen.getByRole("heading", { name: /chakra laffs/i });
        expect(appTitle).toBeInTheDocument();
    });
    it('should not render app content but render loader if no data to display', () => {
        render(<AppBody
            isLoading={false}
            isPunchline
            setIsPunchline={mockFxn}
            fetchData={mockFxn}
        />);
        const loader = screen.getByTestId("loader");
        expect(loader).toBeInTheDocument();
    });
});
