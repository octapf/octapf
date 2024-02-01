import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import i18n from '../../../i18n'
import { assets } from '../../../assets'
import { Link } from 'react-router-dom'
import { Container } from '../../atoms'

export const Header = () => {
	const [selectedValue, setSelectedValue] = useState('EN')
	const { t } = useTranslation()
	console.log(selectedValue)

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value)
		i18n.changeLanguage(e.target.value)
	}

	return (
		<header
			id='header'
			className='header-flex'
		>
			<Container type='header-container'>
				<Link to={'/'}>
					<div className='logo-container'>
						<img
							className='logo'
							src={assets.frangipaniDevLogo}
							alt='frangipanidev-logo'
						/>
					</div>
				</Link>
				<h2
					id='header'
					className='title-name'
				>
					Octavio Frangipani
				</h2>
				<select
					className='language-select'
					value={selectedValue}
					onChange={handleSelectChange}
				>
					<option value={'en'}>EN</option>
					<option value={'es'}>ES</option>
				</select>
			</Container>
			<h6 className='subtitle-name'>{t('full-stack-developer')}</h6>
		</header>
	)
}
