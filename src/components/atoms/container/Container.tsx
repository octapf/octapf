type TContainer = {
	type: string
	children: React.ReactNode
}

export const Container = ({ type, children }: TContainer) => {
	return <div className={type}>{children}</div>
}
