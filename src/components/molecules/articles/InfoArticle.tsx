export type TInfoArticle = {
	infoData: {
		city: string
		linkedinText: string
		githubText: string
		passportText: string
		languageText: string
		summary: string
		QRCodeAsset: string
	}
};

export const InfoArticle = ({
	infoData: {
		city,
		linkedinText,
		githubText,
		passportText,
		languageText,
		summary,
		QRCodeAsset,
	},
}: TInfoArticle) => (
		<article className='info-article'>
			<h1>
				<em className='fa-brands fa-html5' />{' '}
				<em className='fa-brands fa-css3-alt' />{' '}
				<em className='fa-brands fa-js-square' />{' '}
				<em className='fab fa-bootstrap' />{' '}
				<em className='fa-brands fa-react' />{' '}
				<em className='fa-brands fa-node' />{' '}
				<em className='fa-brands fa-git-alt' />{' '}
			</h1>

			<p>{city} </p>
			<div className='info-flex'>
				<p>
					<em className='fas fa-envelope' />{' '}
					<a href='mailto:frangipani.octavio@gmail.com'>
						frangipani.octavio@gmail.com{' '}
						<em className='fa-solid fa-up-right-from-square' />
					</a>
				</p>
				<p>
					<em className='fa-brands fa-whatsapp' />{' '}
					<a
						href='https://wa.me/34722696514'
						target='_blank' rel="noreferrer"
					>
						+34 722 69 65 14{' '}
						<em className='fa-solid fa-up-right-from-square' />
					</a>
				</p>

				<p>
					<em
						id='linkedin-icon'
						className='fab fa-linkedin'
					 />{' '}
					<a
						href='https://www.linkedin.com/in/octaviofrangipani/'
						target='_blank' rel="noreferrer"
					>
						{linkedinText}{' '}
						<em className='fa-solid fa-up-right-from-square' />
					</a>
				</p>
				<p>
					<em
						id='github-icon'
						className='fab fa-github-square'
					 />{' '}
					<a
						href='https://github.com/octapf?tab=repositories'
						target='_blank' rel="noreferrer"
					>
						{githubText} <em className='fa-solid fa-up-right-from-square' />
					</a>
				</p>
				<p>
					<em className='fa-solid fa-passport' /> <span>{passportText}</span>
				</p>
				<p>
					<em className='fa-solid fa-language' /> <span>{languageText}</span>
				</p>
			</div>

			<p>
				<i>{summary}</i>
			</p>
			<div className='qrcode-container'>
				<img
					className='qrcode'
					src={QRCodeAsset}
					alt='codigo qr frangipani.dev'
				/>
			</div>
		</article>
	);
