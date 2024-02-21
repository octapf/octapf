import { Container } from '../components/atoms';
import { Footer, Header } from '../components/layout';
import { MainContent } from '../components/organisms';

export const Cv = () => (
    <Container type="cv-container">
        <Header />
        <MainContent />
        <Footer />
    </Container>
);
