import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Home } from '../../pages';

describe('Home', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const home = container.querySelector('div');

        expect(home).toBeInTheDocument();
    });
});
