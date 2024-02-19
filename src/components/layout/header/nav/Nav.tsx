import { assets } from '../../../../assets'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import i18n from '../../../../i18n'

export const Nav = () => {
	const [selectedValue, setSelectedValue] = useState('EN')

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(e.target.value)
		i18n.changeLanguage(e.target.value)
	}
	return (
		<nav className='nav'>
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
		</nav>
	)
}
