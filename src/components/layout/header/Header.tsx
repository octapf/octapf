import { useTranslation } from 'react-i18next'
import { Nav } from './nav/Nav'

export const Header = () => {
	const { t } = useTranslation()

	return (
		<header
			id='header'
			className='header'
		>
			<Nav />
			<h6 className='subtitle-name'>{t('full-stack-developer')}</h6>
		</header>
	)
}
