export type TImg = {
	imgData: {
		type: string
		assetURL: string
		assetALT: string
		label?: string
	}
}

export const Img = ({ imgData: { type, assetURL, assetALT, label } }: TImg) => {
	return (
		<div className={type}>
			<img
				src={assetURL}
				alt={assetALT}
			/>
			{label && <label className='img-label'>{label}</label>}
		</div>
	)
}
