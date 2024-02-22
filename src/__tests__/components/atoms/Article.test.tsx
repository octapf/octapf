import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { Article } from '../../../components/atoms';
import { ArticleType } from '../../../types/Types';

describe('Article', () => {
    it('renders correctly', () => {
        render(
            <Article type={ArticleType.ABOUT}>
                <p>Test</p>
            </Article>
        );

        const article = screen.getByRole('article');

        expect(article).toBeInTheDocument();
    });
});
