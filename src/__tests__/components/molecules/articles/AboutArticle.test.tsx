import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { AboutArticle } from '../../../../components/molecules';

describe('AboutArticle', () => {
    it('renders correctly', () => {
        render(<AboutArticle aboutData={<>Test</>} />);

        const article = screen.getByRole('article');

        expect(article).toBeInTheDocument();
    });
});
