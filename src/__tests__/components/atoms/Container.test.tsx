import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Container } from '../../../components/atoms';

describe('Container', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Container type="test">
                <p>Test</p>
            </Container>
        );
        const div = container.querySelector('div');

        expect(div).toBeInTheDocument();
    });
});
