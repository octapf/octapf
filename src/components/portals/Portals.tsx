import { Container, Portal } from '..'
import styles from './portals.module.css'
import lgvLogo from '../../assets/lgv-logo-cuadrado.svg'
import itaLogo from '../../assets/it-logo.svg'
import frangipaniDevLogo from '../../assets/frangipanidev-logo-cuadrado.svg'

export const Portals = () => {
	return (
		<Container type='flex-column-container'>
			<h1
				id='portals'
				className={styles.title}
			>
				GET TO KNOW MY PROJECTS 🧪
			</h1>
			<Container type='flex-row-container'>
				<Portal
					propStyles={styles.frangipanidev}
					src={'/cv'}
					image={frangipaniDevLogo}
					description='My online CV'
				/>

				<Portal
					propStyles={styles.frangipanidev}
					image={frangipaniDevLogo}
					src={'https://cocktail-app-frontend.vercel.app/'}
					description='Cocktail Wiki'
				/>

				<Portal
					propStyles={styles.lgv}
					image={lgvLogo}
					src={'https://lagaritaverde.com'}
				/>
				<Portal
					propStyles={styles.lgv}
					image={lgvLogo}
					src={'https://ui-library.lagaritaverde.com/'}
					description='UI Library App'
				/>
				<Portal
					propStyles={styles.lgv}
					image={lgvLogo}
					src={'https://ticketscanner.lagaritaverde.com/'}
					description='Ticket Scanner App'
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
