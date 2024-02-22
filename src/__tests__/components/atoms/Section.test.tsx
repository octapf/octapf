import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Section } from '../../../components/atoms';

describe('Section', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Section id="test">
                <p>Test</p>
            </Section>
        );
        const section = container.querySelector('section');

        expect(section).toBeInTheDocument();
    });
});
