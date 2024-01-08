import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
	return (
		<Container type={'app-container'}>
			<Header />
			<Main />
			<Footer />
		</Container>
	)
}

export default App
