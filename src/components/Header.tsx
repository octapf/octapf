import { useTranslation } from 'react-i18next'
import Container from './Container'
import { useState } from 'react'
import i18n from '../i18n'

const Header = () => {
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
			className='header logo'
		>
			<Container type='header-container'>
				<h2
					id='header'
					className='pady1'
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
			<h6>{t('full-stack-developer')}</h6>
		</header>
	)
}

export default Header
