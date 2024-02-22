import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Header } from '../../components/layout';

describe('Header', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );

        const header = container.querySelector('header');

        expect(header).toBeInTheDocument();
    });
});
