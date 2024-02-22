import { assets } from '../../assets';
import { Container } from '../atoms';
import { Portal } from '../molecules';

export const Portals = () => (
    <Container type="flex-column-container">
        <Container type="portals-section-proyects flex-column-container">
            <h1 id="portals" className="portals-title">
                GET TO KNOW MY PROJECTS 🧪
            </h1>
            <Container type="flex-row">
                <Portal
                    propStyles="portals-lgv"
                    image={assets.lgvLogo}
                    to="https://lagaritaverde.com"
                />
                <Portal
                    propStyles="portals-lgv"
                    image={assets.lgvLogo}
                    to="https://ui-library.lagaritaverde.com/"
                    description="UI Library App"
                />
                <Portal
                    propStyles="portals-lgv"
                    image={assets.lgvLogo}
                    to="https://ticketscanner.lagaritaverde.com/"
                    description="Ticket Scanner App"
                />
                <Portal
                    propStyles="portals-ita"
                    image={assets.itaLogo}
                    to="https://dev.itawiki.eurecatacademy.org/"
                    title="ITA Wiki"
                    description="Barcelona Activa"
                />
                <Portal
                    propStyles="portals-frangipanidev"
                    to="/cv"
                    image={assets.frangipaniDevLogo}
                    description="My online CV"
                />

                <Portal
                    propStyles="portals-frangipanidev"
                    image={assets.frangipaniDevLogo}
                    to="https://cocktail-app-frontend.vercel.app/"
                    description="Cocktail Wiki"
                />
            </Container>
        </Container>
        <Container type="portals-section-qrcodes flex-column-container">
            <h1 id="portals" className="portals-title">
                QR CODES 📷
            </h1>
            <Container type="portals-Container">
                <Portal
                    multiPortal
                    propStyles="portals-qrcode"
                    image={assets.qrcode_frangipani}
                    description="frangipani.dev"
                />

                <Portal
                    multiPortal
                    to="https://lagaritaverde.com"
                    propStyles="portals-qrcode"
                    image={assets.qrcode_github_lgv}
                    description="La garita Verde - Github"
                />

                <Portal
                    multiPortal
                    to="https://www.linkedin.com/in/octaviofrangipani/"
                    propStyles="portals-qrcode"
                    image={assets.qrcode_linkedin_octaviofrangipani}
                    description="Octavio Frangipani Linkedin"
                />
                <Portal
                    multiPortal
                    to="https://github.com/octapf"
                    propStyles="portals-qrcode"
                    image={assets.qrcode_github_octapf}
                    description="frangipani.dev - Github"
                />
            </Container>
        </Container>
    </Container>
);
