import { Container, Portal } from '..'
import styles from './portals.module.css'
import lgvLogo from '../../assets/lgv-logo-cuadrado.svg'
import itaLogo from '../../assets/it-logo.svg'

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
					propStyles={styles.ita}
					image={itaLogo}
					src={'https://dev.itawiki.eurecatacademy.org/'}
					title='ITA Wiki'
					description='Barcelona Activa'
				/>
			</Container>
		</Container>
	)
}
