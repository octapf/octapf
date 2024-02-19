import { Link } from 'react-router-dom'

export const Footer = () => {
	return (
		<footer className='footer'>
			<Link to={'https://linkedin.com/in/octaviofrangipani/'}>
				linkedin/octaviofrangipani
			</Link>
			<Link to={'https://lagaritaverde.com'}>lagaritaverde.com</Link>
			<Link to={'https://frangipani.dev'}>frangipani.dev</Link>
			<Link to={'https://github.com/octapf'}>github.com/octapf</Link>
			<Link to={'https://github.com/lagaritaverde'}>
				github.com/lagaritaverde
			</Link>
		</footer>
	)
}
