import { Arrow } from './Arrow';

export type TSectionTitle = {
    text: string;
};

export const SectionTitle = ({ text }: TSectionTitle) => (
    <h4 className="section-title">
        {text} <Arrow href="#header" direction="up" />
    </h4>
);
