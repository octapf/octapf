import { Container } from '../components/atoms';
import { Arrow } from '../components/molecules';
import { Hero, Portals } from '../components/organisms';

export const Home = () => (
    <>
        <Container type="app-container">
            <Hero />
            <Arrow href="#portals" direction="down" />
            <Portals />
        </Container>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
    </>
);
