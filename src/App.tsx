import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Hero from './components/hero/Hero'
import Arrow from './components/arrow/Arrow'

function App() {
	return (
		<Container type={'app-container'}>
			<Hero />
			<Arrow />
			<Header />
			<Main />
			<Footer />
		</Container>
	)
}

export default App
