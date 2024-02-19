export type TTitle = {
	title: string
	web: string
	companyName: string
}

export const Title = ({ title, web, companyName }: TTitle) => {
	return (
		<h5>
			{title}{' '}
			<a
				href={web}
				target='_blank'
			>
				{companyName}
			</a>
		</h5>
	)
}
