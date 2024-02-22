import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Img } from '../../../../components/molecules';

describe('Img', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Img
                imgData={{
                    assetURL: 'test',
                    assetALT: 'test',
                    type: 'test',
                    label: 'test',
                }}
            />
        );

        const div = container.querySelector('div');

        expect(div).toBeInTheDocument();
    });
});
