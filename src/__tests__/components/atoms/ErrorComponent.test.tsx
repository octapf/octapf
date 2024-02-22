import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { ErrorComponent } from '../../../components/atoms';

describe('ErrorComponent', () => {
    it('renders correctly', () => {
        const { container } = render(<ErrorComponent />);
        const div = container.querySelector('div');

        expect(div).toBeInTheDocument();
    });
});
