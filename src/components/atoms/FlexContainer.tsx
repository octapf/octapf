export type TFlexContainer = { children: React.ReactNode };

export const FlexContainer = ({ children }: TFlexContainer) => <div className='flex-container'>{children}</div>;
