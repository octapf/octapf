import styles from './portals.module.css'
import { assets } from '../../../assets'
import { Container } from '../../atoms'
import { Portal } from '../../molecules'

export const Portals = () => {
	return (
		<Container type={`flex-column-container`}>
			<Container type={`${styles.section} flex-column-container`}>
				<h1
					id='portals'
					className={styles.title}
				>
					GET TO KNOW MY PROJECTS 🧪
				</h1>
				<Container type={`flex-row-container`}>
					<Portal
						propStyles={styles.frangipanidev}
						src={'/cv'}
						image={assets.frangipaniDevLogo}
						description='My online CV'
					/>

					<Portal
						propStyles={styles.frangipanidev}
						image={assets.frangipaniDevLogo}
						src={'https://cocktail-app-frontend.vercel.app/'}
						description='Cocktail Wiki'
					/>

					<Portal
						propStyles={styles.lgv}
						image={assets.lgvLogo}
						src={'https://lagaritaverde.com'}
					/>
					<Portal
						propStyles={styles.lgv}
						image={assets.lgvLogo}
						src={'https://ui-library.lagaritaverde.com/'}
						description='UI Library App'
					/>
					<Portal
						propStyles={styles.lgv}
						image={assets.lgvLogo}
						src={'https://ticketscanner.lagaritaverde.com/'}
						description='Ticket Scanner App'
					/>
					<Portal
						propStyles={styles.ita}
						image={assets.itaLogo}
						src={'https://dev.itawiki.eurecatacademy.org/'}
						title='ITA Wiki'
						description='Barcelona Activa'
					/>
				</Container>
			</Container>
			<Container type={`${styles.section2} flex-column-container`}>
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
						image={assets.qrcode_frangipani}
						description='frangipani.dev'
					/>

					<Portal
						multiPortal={true}
						propStyles={styles.qrcode}
						image={assets.qrcode_github_lgv}
						description='La garita Verde - Github'
					/>

					<Portal
						multiPortal={true}
						propStyles={styles.qrcode}
						image={assets.qrcode_linkedin_octaviofrangipani}
						description='Octavio Frangipani Linkedin'
					/>
					<Portal
						multiPortal={true}
						propStyles={styles.qrcode}
						image={assets.qrcode_github_octapf}
						description='frangipani.dev - Github'
					/>
				</Container>
			</Container>
		</Container>
	)
}
