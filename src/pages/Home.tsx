import { Container } from '../components/atoms'
import { Arrow } from '../components/molecules'
import { Hero, Portals } from '../components/organisms'

export const Home = () => {
	return (
		<>
			<Container type={'app-container'}>
				<Hero />
				<Arrow />
				<Portals />
			</Container>
			<div className='bg'></div>
			<div className='bg bg2'></div>
			<div className='bg bg3'></div>
		</>
	)
}
