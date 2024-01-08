import IContainer from '../interfaces/IContainer'

const Container = ({ type, children }: IContainer) => {
	return <div className={type}>{children}</div>
}

export default Container
