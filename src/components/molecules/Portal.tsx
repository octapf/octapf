import { Link } from 'react-router-dom';
import { Container } from '../atoms';

type TPortal = {
    multiPortal?: boolean;
    to?: string;
    title?: string;
    supertitle?: string;
    description?: string;
    image?: string;
    propStyles?: CSSModuleClasses[string];
};

export const Portal = ({
    multiPortal,
    propStyles,
    to = '/',
    title,
    supertitle,
    description,
    image,
}: TPortal) => (
    <Link
        to={to}
        target={`${to !== '/' && '_blank'}`}
        rel="noopener noreferrer"
    >
        <Container
            type={`${multiPortal ? 'multiportal' : 'portal'} ${propStyles}`}
        >
            {image && <img className="portal-image" src={image} alt={title} />}
            {supertitle && <h1>{supertitle}</h1>}
            {title && <h2>{title}</h2>}
            <strong>
                <small>{description}</small>
            </strong>
        </Container>
    </Link>
);
