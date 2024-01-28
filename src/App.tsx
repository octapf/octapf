import { Container, Hero, Arrow, Portals } from './components/'

function App() {
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

export default App
