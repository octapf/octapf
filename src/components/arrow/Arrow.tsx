import styles from './arrow.module.css'

const Arrow = () => {
	return (
		<div className={styles.container}>
			<a href='#header'>
				<i className={`fa-solid fa-chevron-down ${styles.arrow}`}></i>
			</a>
		</div>
	)
}

export default Arrow
