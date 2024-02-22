export type TTitle = {
	title: string
	web: string
	companyName: string
};

export const Title = ({ title, web, companyName }: TTitle) => (
		<h5>
			{title}{' '}
			<a
				href={web}
				target='_blank' rel="noreferrer"
			>
				{companyName}
			</a>
		</h5>
	);
