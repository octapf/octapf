export type THero = {
    heroData: {
        heroSrc: string;
        heroAlt: string;
        heroTitle: string;
        heroSubtitle?: string;
    };
};

export const Hero = ({
    heroData: { heroAlt, heroSrc, heroTitle, heroSubtitle },
}: THero) => (
    <div className="hero-container">
        <div className="hero-logo-container">
            <img className="hero-logo" src={heroSrc} alt={heroAlt} />
        </div>
        <div className="hero-title-container">
            <p className="hero-title">{heroTitle}</p>
            <small className="hero-subtitle">{heroSubtitle}</small>
        </div>
    </div>
);
