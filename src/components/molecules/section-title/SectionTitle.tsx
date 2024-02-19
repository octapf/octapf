export type TSectionTitle = {
	text: string
}

export const SectionTitle = ({ text }: TSectionTitle) => {
	return (
		<h4 className='section-title'>
			{text}{' '}
			<a href='#header'>
				<em className='fa-solid fa-angle-up'></em>
			</a>
		</h4>
	)
}
