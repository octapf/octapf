export type TContainer = {
    type: string;
    children: React.ReactNode;
};

export const Container = ({ type, children }: TContainer) => (
    <div className={type}>{children}</div>
);
