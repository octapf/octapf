import { Link } from 'react-router-dom'
import { Container } from '../../atoms'

export const Footer = () => {
	return (
		<footer>
			<Container type='footer'>
				<Link to={'https://linkedin.com/in/octaviofrangipani/'}>
					linkedin/octaviofrangipani
				</Link>
				<Link to={'https://lagaritaverde.com'}>lagaritaverde.com</Link>
				<Link to={'https://frangipani.dev'}>frangipani.dev</Link>
				<Link to={'https://github.com/octapf'}>github.com/octapf</Link>
				<Link to={'https://github.com/lagaritaverde'}>
					github.com/lagaritaverde
				</Link>
			</Container>
		</footer>
	)
}
