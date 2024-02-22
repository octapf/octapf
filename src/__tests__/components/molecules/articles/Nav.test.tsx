import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Nav } from '../../../../components/molecules';

describe('Nav', () => {
    it('renders correctly', () => {
        const { container } = render(
            <BrowserRouter>
                <Nav
                    navData={{
                        logoImg: { alt: 'altTest', src: 'srcTest' },
                        navTitle: 'Test',
                    }}
                />
            </BrowserRouter>
        );

        const nav = container.querySelector('nav');

        expect(nav).toBeInTheDocument();
    });
});
