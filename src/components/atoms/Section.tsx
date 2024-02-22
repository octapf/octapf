export type TSection = {
	id: string
	children: React.ReactNode
};

export const Section = ({ id, children }: TSection) => (
		<section
			id={id}
			className='flex-section'
		>
			{children}
		</section>
	);
