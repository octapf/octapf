import styles from './arrow.module.css'

export const Arrow = () => {
	return (
		<div className={styles.container}>
			<a href='#portals'>
				<i className={`fa-solid fa-chevron-down ${styles.arrow}`}></i>
			</a>
		</div>
	)
}
