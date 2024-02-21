import { ArticleType } from '../../../types/Types';
import { Article } from '../../atoms';
import { Title } from '../Title';

export type TEducationArticle = {
    educationData: {
        educationText: React.ReactNode;
        title: string;
        dateRange: React.ReactNode;
        city: React.ReactNode;
        web: string;
        companyName: string;
    };
};

export const EducationArticle = ({
    educationData: { city, companyName, dateRange, educationText, title, web },
}: TEducationArticle) => (
    <Article type={ArticleType.EDUCATION}>
        <Title title={title} web={web} companyName={companyName} />

        <p>
            <small>{city}</small>
            <br />
            {dateRange}
        </p>

        <small>{educationText}</small>
    </Article>
);
