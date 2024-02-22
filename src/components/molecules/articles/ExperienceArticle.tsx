import { ArticleType } from '../../../types/Types';
import { Article } from '../../atoms';
import { Title } from '../Title';

export type TExperienceArticle = {
    experienceData: {
        experienceText: React.ReactNode;
        title: string;
        dateRange: React.ReactNode;
        city: React.ReactNode;
        web: string;
        companyName: string;
    };
};

export const ExperienceArticle = ({
    experienceData: {
        city,
        companyName,
        dateRange,
        experienceText,
        title,
        web,
    },
}: TExperienceArticle) => (
    <Article type={ArticleType.EXPERIENCE}>
        <Title title={title} web={web} companyName={companyName} />

        <p>
            {dateRange}
            <small>{city}</small>
        </p>

        <small>{experienceText}</small>
    </Article>
);
