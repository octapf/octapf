import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Footer } from '../../components/layout';

describe('Footer', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        const footer = container.querySelector('footer');

        expect(footer).toBeInTheDocument();
    });
});
