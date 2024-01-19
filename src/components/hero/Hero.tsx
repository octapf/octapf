import logo from '../../assets/frangipanidev-invert-logo.png'
import styles from './hero.module.css'

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles['logo-container']}>
				<img
					className={styles.logo}
					src={logo}
					alt='logo'
					width={400}
				/>
			</div>
			<div className={styles['title-container']}>
				<p className={styles.title}>frangipani.dev</p>
				<small className={styles.subtitle}>
					A software development company
				</small>
			</div>
		</div>
	)
}

export default Hero
