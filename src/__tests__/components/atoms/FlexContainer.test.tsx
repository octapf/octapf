import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { FlexContainer } from '../../../components/atoms';

describe('FlexContainer', () => {
    it('renders correctly', () => {
        const { container } = render(
            <FlexContainer>
                <p>Test</p>
            </FlexContainer>
        );
        const div = container.querySelector('div');

        expect(div).toBeInTheDocument();
    });
});
