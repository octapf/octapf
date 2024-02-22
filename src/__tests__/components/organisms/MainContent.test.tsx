import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { MainContent } from '../../../components/organisms';

describe('MainContent', () => {
    it('renders correctly', () => {
        const { container } = render(<MainContent />);

        const main = container.querySelector('main');

        expect(main).toBeInTheDocument();
    });
});
