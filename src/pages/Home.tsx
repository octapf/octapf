import { assets } from '../assets';
import { Container } from '../components/atoms';
import { Arrow } from '../components/molecules';
import { Hero, Portals } from '../components/organisms';

export const Home = () => (
    <Container type="app-container">
        <Hero
            heroData={{
                heroSrc: assets.frangipaniDevLogo,
                heroAlt: 'logo',
                heroTitle: 'frangipani.dev',
                heroSubtitle: 'A Software Development Company',
            }}
        />
        <Arrow href="#portals" direction="down" />
        <Portals />

        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
    </Container>
);
