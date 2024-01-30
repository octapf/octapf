import IContainer from '../../../interfaces/IContainer'

export const Container = ({ type, children }: IContainer) => {
	return <div className={type}>{children}</div>
}
