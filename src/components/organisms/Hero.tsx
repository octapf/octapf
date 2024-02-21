import logo from '../../assets/frangipanidev-invert-logo.png';

export const Hero = () => (
    <div className="hero-container">
        <div className="hero-logo-container">
            <img className="hero-logo" src={logo} alt="logo" />
        </div>
        <div className="hero-title-container">
            <p className="hero-title">frangipani.dev</p>
            <small className="hero-subtitle">
                A software development company
            </small>
        </div>
    </div>
);
