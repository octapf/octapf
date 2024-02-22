import { useTranslation } from 'react-i18next';
import { Nav } from '../molecules/Nav';
import { assets } from '../../assets';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header id="header" className="header">
            <Nav
                navData={{
                    logoImg: {
                        src: assets.frangipaniDevLogo,
                        alt: 'frangipani.dev-logo',
                    },
                    navTitle: 'Octavio Frangipani',
                }}
            />
            <h6 className="subtitle-name">{t('full-stack-developer')}</h6>
        </header>
    );
};
