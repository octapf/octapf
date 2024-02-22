import { ArticleType } from '../../../types/Types';
import { Article } from '../../atoms';

export type TAboutArticle = {
    aboutData: React.ReactNode;
};

export const AboutArticle = ({ aboutData }: TAboutArticle) => (
    <Article type={ArticleType.ABOUT}>
        <p>{aboutData}</p>
    </Article>
);
