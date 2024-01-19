import Container from '../Container'
import logo from '../../assets/frangipanidev-invert-logo.png'
import styles from './hero.module.css'

const Hero = () => {
	return (
		<Container type='container'>
			<img
				className={styles.logo}
				src={logo}
				alt='logo'
				width={400}
			/>
			<p className={styles.title}>frangipani.dev</p>
		</Container>
	)
}

export default Hero
