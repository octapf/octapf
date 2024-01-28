import { Container, Portal } from '..'
import styles from './portals.module.css'
import {
	itaLogo,
	frangipaniDevLogo,
	lgvLogo,
	qrcode_frangipani,
	qrcode_github_lgv,
	qrcode_github_octapf,
	qrcode_linkedin_octaviofrangipani,
} from '../../styles/assets'

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
			<h1
				id='portals'
				className={styles.title}
			>
				QR codes 📷
			</h1>
			<Container type={`${styles.multiportalContainer}`}>
				<Portal
					multiPortal={true}
					propStyles={styles.qrcode}
					image={qrcode_frangipani}
					description='frangipani.dev'
				/>

				<Portal
					multiPortal={true}
					propStyles={styles.qrcode}
					image={qrcode_github_lgv}
					description='La garita Verde - Github'
				/>

				<Portal
					multiPortal={true}
					propStyles={styles.qrcode}
					image={qrcode_linkedin_octaviofrangipani}
					description='Octavio Frangipani Linkedin'
				/>
				<Portal
					multiPortal={true}
					propStyles={styles.qrcode}
					image={qrcode_github_octapf}
					description='frangipani.dev - Github'
				/>
			</Container>
		</Container>
	)
}
