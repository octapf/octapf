import { A, Em } from '../../atoms'
import styles from './arrow.module.css'

export const Arrow = () => {
	return (
		<div className={styles.container}>
			<A href='#portals'>
				<Em className={`fa-solid fa-chevron-down ${styles.arrow}`} />
			</A>
		</div>
	)
}
