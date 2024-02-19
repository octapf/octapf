export type TFlexContainer = { children: React.ReactNode }

export const FlexContainer = ({ children }: TFlexContainer) => {
	return <div className='flex-container'>{children}</div>
}
