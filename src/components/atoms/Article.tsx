import { ArticleType } from '../../types/Types';

export type TArticle = {
    children: React.ReactNode;
    type: ArticleType;
};

export const Article = ({ children, type }: TArticle) => (
    <article className={type}>{children}</article>
);
