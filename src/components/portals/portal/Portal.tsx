import { Link } from 'react-router-dom'
import { Container } from '../..'
import styles from './portal.module.css'

type TPortal = {
	multiPortal?: boolean
	src?: string
	title?: string
	supertitle?: string
	description?: string
	image?: string
	propStyles?: CSSModuleClasses[string]
}

export const Portal = ({
	multiPortal,
	propStyles,
	src,
	title,
	supertitle,
	description,
	image,
}: TPortal) => {
	return (
		<>
			{src ? (
				<Link
					to={src}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Container
						type={`${
							multiPortal ? styles.multiportal : styles.portal
						} ${propStyles}`}
					>
						{image && (
							<img
								className={styles['portal-image']}
								src={image}
								alt={title}
							/>
						)}
						{supertitle && <h1>{supertitle}</h1>}
						{title && <h2>{title}</h2>}
						<strong>
							<small>{description}</small>
						</strong>
					</Container>
				</Link>
			) : (
				<Container
					type={`${
						multiPortal ? styles.multiportal : styles.portal
					} ${propStyles}`}
				>
					{image && (
						<img
							className={styles['portal-image']}
							src={image}
							alt={title}
						/>
					)}
					{supertitle && <h1>{supertitle}</h1>}
					{title && <h2>{title}</h2>}
					<strong>
						<small>{description}</small>
					</strong>
				</Container>
			)}
		</>
	)
}
