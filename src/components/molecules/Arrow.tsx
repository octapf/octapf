export type TArrow = {
    href: string;
    direction: 'up' | 'down';
};

export const Arrow = ({ href, direction }: TArrow) => (
    <a href={href} aria-label="Arrow" className="flex">
        <em
            className={`fa-solid ${direction === 'up' ? 'fa-angle-up' : 'fa-chevron-down'}`}
        />
    </a>
);
