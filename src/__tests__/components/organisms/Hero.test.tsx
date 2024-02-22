import { render } from '@testing-library/react';
import { expect } from 'vitest';
import { Hero } from '../../../components/organisms';

describe('Hero', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Hero
                heroData={{
                    heroAlt: 'altTest',
                    heroSrc: 'test.png',
                    heroTitle: 'testTitle',
                    heroSubtitle: 'testSubtitle',
                }}
            />
        );

        const div = container.querySelector('div');

        expect(div).toBeInTheDocument();
    });
});
