import { useTranslation } from 'react-i18next'
import { Container } from '../../../components'
import { useState } from 'react'
import i18n from '../../../i18n'
import { frangipaniDevLogo } from '../../../styles/assets'
import { Link } from 'react-router-dom'

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
			className='header logo'
		>
			<Container type='header-container'>
				<Link to={'/'}>
					<div>
						<img
							src={frangipaniDevLogo}
							alt='frangipanidev-logo'
							width={50}
							style={{ marginLeft: '15px' }}
						/>
					</div>
				</Link>
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
