import { Container, Portal } from '..'
import styles from './portals.module.css'
import lgvLogo from '../../assets/lgv-logo-cuadrado.svg'

export const Portals = () => {
	return (
		<Container type='flex-column-container'>
			<h1 className={styles.title}>Get to know my projects 🧪</h1>
			<Container type='flex-row-container'>
				<Portal
					src={'/cv'}
					supertitle='😎'
					title='My online CV'
					description='Get to know me!'
				/>
				<Portal
					propStyles={styles.lgv}
					image={lgvLogo}
					src={'https://lagaritaverde.com'}
					description='A game development company'
				/>
				<Portal
					src={'/cv'}
					title='My online CV'
				/>
			</Container>
		</Container>
	)
}
