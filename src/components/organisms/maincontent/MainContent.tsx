import { useTranslation } from 'react-i18next'
import { capitalize } from '../../../utils'
import { assets } from '../../../assets'
import { FlexContainer, Section } from '../../atoms'
import {
	AboutArticle,
	EducationArticle,
	ExperienceArticle,
	Img,
	InfoArticle,
	SectionTitle,
} from '../../molecules'
import { useGetJobDuration } from '../../../hooks'

export const MainContent = () => {
	const { t } = useTranslation()
	const actualJobDuration = useGetJobDuration()

	const infoData = {
		city: t('city'),
		linkedinText: t('linkedin'),
		githubText: t('github'),
		passportText: t('passport'),
		languageText: t('language'),
		summary: t('summary'),
		QRCodeAsset: assets.QRcodeFrangipanidev,
	}

	const aboutData = (
		<>
			{t('about-1')}
			<i>{t('years-experience')}</i>
			{t('about-2')}
			<i> {t('6 years of experience in the Ecommerce industry')} </i>
			{t('about-3')}
			<i> {t('balance')} </i>
			{t('about-4')}
			<i>{t('professional photographer for 6 years')}</i> {t('about-5')}{' '}
			<i>{t('proactive, ambitious and entrepreneurial.')}</i>
		</>
	)

	const experienceDataOne = {
		city: (
			<>
				{t('city')} ({t('hybrid')})
			</>
		),

		dateRange: (
			<>
				{t('February 2023 - present')} ({actualJobDuration} {t('months')})
				<br />
			</>
		),
		title: `${t('full-stack-developer')} ${t('at')}`,
		web: 'https://www.urbanyhostels.com/',
		companyName: 'Urbany Hostels',
		experienceText: (
			<>
				{t('Proficiency in')} <i>React</i>
				<br />
				{t('Proficiency in')} <i>HTML / CSS / JavaScript</i>
				<br />
				{t('Creation of')} <i>custom Hooks</i>
				<br />
				{t('Implement')} <i>Typescript</i> - Frontend & Backend
				<br />
				{t('Working with')} <i>Node & Express.Js</i> - Backend
				<br />
				{t('Use of')} <i>styled components</i>
				<br />
				{t('Implement')} <i>REDUX</i>
				<br />
				{t('Responsive Design')}
				<br />
				{t('Understanding of Clean code & Design patterns')}
				<br />
				{t('Applied')} <i>Unit Testing - JEST</i>
				<br />
				{t('Integrating')} PayPal/Strive APIs
				<br />
				<i>GitHub & Git</i> {t('for Version Control System')}
				<br />
				{t('Creation of')} RESTful APIs
				<br />
				{t('Working with')} <i>MongoDB</i> & Mongoose ORM
				<br />
				{t('Authorization/Authentication workflow')}
				<br />
			</>
		),
	}
	const experienceDataTwo = {
		city: (
			<>
				{t('city')} ({t('remote')})
			</>
		),

		dateRange: (
			<>
				{t('December 2021 - May 2022')} (6 {t('months')})
				<br />
			</>
		),
		title: `${t('full-stack-developer')} ${t('at')}`,
		web: 'https://www.linkedin.com/company/worksut/mycompany/',
		companyName: 'Worksut',
		experienceText: (
			<>
				{t('Knowledge of')} <i>{t('Object Oriented Programming')}</i> <br />
				{t('Implement microservice architectures')}
				<br />
				{t('Working with')} Azure Cloud Services
				<br />
				{t('Main experience with')} <i>MERN Stack</i>
				<br />
				{t('Implement')} TDD & Unit Testing
				<br />
				{t('Usign')} <i>Typescript</i> - Front & Backend
				<br />
				{t('Working with')} <i>Node & Express.Js</i> - Backend
				<br />
				<i>{t('Agile Methodology')}</i> (SCRUM)
				<br />
				{t('Implement')} <i>React / Redux</i>
				<br />
				{t('Experience building')} RESTful API’s
				<br />
				{t('Quality Documentation and Diagrams')}
				<br />
				{t('Using Git-Flow and Git for Version control system')}
				<br />
			</>
		),
	}
	const experienceDataThree = {
		city: (
			<>
				{t('city-2')} ({t('remote')})
			</>
		),

		dateRange: (
			<>
				{t('February 2021 - January 2022')} (1 {t('year')})
				<br />
			</>
		),
		title: `${t('full-stack-developer')} ${t('at')}`,
		web: '#Letizia',
		companyName: 'Letizia',
		experienceText: (
			<>
				{t('Implement')} <i>{t('payment processing system')}</i>
				<br />
				{t('Proficiency in')} <i>HTML / CSS / JS</i>
				<br />
				{t('Use of')} <i>React / Redux / Typescript</i> - Frontend
				<br />
				Typescript, <i>NodeJS & MongoDB</i> stack - Backend
				<br />
				{t('Experience implementing')} <i>OTP services</i>
				<br />
				{t('Working with')} <i>SCRUM</i> {t('as Agile methodology')}
				<br />
				{t('Experience building')} <i>APIs</i>
				<br />
				{t('Live team')} <i>{t('code reviews')}</i>
				<br />
				{t('Proficiency in')} <i>GitFlow</i>
				<br />
			</>
		),
	}

	const educationDataOne = {
		city: (
			<>
				{t('city')} ({t('onsite')})
			</>
		),

		dateRange: (
			<>
				{t('April 2023 - August 2023')} (4 {t('months')})
				<br />
			</>
		),
		title: `${t('full-stack-developer')} ${t('at')}`,
		web: 'https://www.barcelonactiva.cat/es/itacademy#mesinfo',
		companyName: 'Barcelona Activa - IT Academy',
		educationText: (
			<>
				{t('Proficiency in')} <i>React</i>
				<br />
				{t('Creation of')} <i>custom Hooks</i>
				<br />
				{capitalize(t('implement'))} <i>Typescript</i> - Front & Backend
				<br />
				{t('Use of')} <i>styled components</i>
				<br />
				{t('Use of')} Redux & <i>Context API</i>
				<br />
				<i>{t('Responsive Design')}</i>
				<br />
				{t('Understanding of')} <i>{t('Clean code & Design patterns')}</i>
				<br />
				{t('Applied')} <i>Unit Testing - JEST</i>
				<br />
			</>
		),
	}
	const educationDataTwo = {
		city: (
			<>
				{t('city-4')} ({t('remote')})
			</>
		),

		dateRange: (
			<>
				{t('March 2021 - July 2021')} (5 {t('months')})
				<br />
			</>
		),
		title: `Full Stack Web ${t('eCommerce Project')}`,
		web: 'https://www.udemy.com/course/mern-ecommerce/',
		companyName: 'Proshop',
		educationText: (
			<>
				{t('Develop a full')} <i>{t('transactional e-commerce website')}</i>
				<br />
				{capitalize(t('implement'))} MERN stack, REDUX & <i>Bootstrap</i>
				<br />
				<i>Nodejs/ExpressJs</i> {t('with')} <i>MongoDB/Mongoose</i>
				<br />
				{t('Use of')} <i>JWT authentication</i>
				<br />
				{t('Creating')} <i>Custom error handlers</i>
				<br />
				{t('Integrating')} <i>PayPal / Strive</i> APIs
				<br />
				<i>{capitalize(t('deployment'))}</i> {t('to')} Heroku
				<br />
			</>
		),
	}
	const educationDataThree = {
		city: (
			<>
				{t('city-3')} ({t('remote')})
			</>
		),

		dateRange: (
			<>
				{t('October 2020 - February 2021')} (4 {t('months')})
				<br />
			</>
		),
		title: `${t('Full Stack Web Development BootCamp')} ${t('at')}`,
		web: 'https://www.appbrewery.co/',
		companyName: 'The App Brewery',
		educationText: (
			<>
				{t('Proficiency in')} <i>HTML / CSS / JavaScript</i>
				<br />
				{t('Understanding of')} <i>DOM Manipulation</i>
				<br />
				MERN Stack {t('with')} <i>REDUX</i>
				<br />
				<i>GitHub & Git</i> {t('for Version Control System')}
				<br />
				<i>Express & Nodejs</i> Backend
				<br />
				Creation of <i>RESTful APIs</i>
				<br />
				<i>SQL / NOSQL Database</i>
				<br />
				{t('Work with')} MongoDB & <i>Mongoose</i> ORM
				<br />
				<i>{t('Authorization/Authentication workflow')}</i> - JWT
				<br />
			</>
		),
	}

	return (
		<main className='main-content-container'>
			<Section id='info'>
				<FlexContainer>
					<Img
						imgData={{
							type: 'profile-pic',
							assetALT: 'profile picture',
							assetURL: assets.profilePic,
						}}
					/>
					<InfoArticle infoData={infoData} />
				</FlexContainer>
			</Section>

			<Section id='about'>
				<SectionTitle text={t('about')} />
				<AboutArticle aboutData={aboutData} />
			</Section>

			<Section id='experience'>
				<SectionTitle text={t('experience')} />
				<FlexContainer>
					<ExperienceArticle experienceData={experienceDataOne} />
					<ExperienceArticle experienceData={experienceDataTwo} />
					<ExperienceArticle experienceData={experienceDataThree} />
				</FlexContainer>
			</Section>
			<Section id='education'>
				<SectionTitle text={t('education')} />
				<FlexContainer>
					<EducationArticle educationData={educationDataOne} />
					<EducationArticle educationData={educationDataTwo} />
					<EducationArticle educationData={educationDataThree} />
				</FlexContainer>
			</Section>

			<Section id='skills'>
				<SectionTitle text={t('skills')} />
				<div className='flex-row-skills'>
					<article className='skill-article'>
						<p>
							<em className='fa-brands fa-html5 html-icon'></em>
							<strong> HTML5</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<em className='fa-brands fa-css3-alt css-icon'></em>
							<strong> CSS3</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<em className='fa-brands fa-js js-icon'></em>
							<strong> JavaScript</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<em className='fab fa-bootstrap bs-icon'></em>
							<strong> Bootstrap</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<em className='fa-brands fa-react react-icon'></em>
							<strong> React</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<img
								src={assets.reduxLogo}
								alt='redux-logo'
								width={15}
							/>{' '}
							<strong>REDUX</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
								alt='typescript-logo'
								width={15}
							/>{' '}
							<strong>TypeScript</strong>
						</p>
					</article>

					<article className='skill-article'>
						<p>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Mongodb-icon.svg/64px-Mongodb-icon.svg.png'
								alt='typescript-logo'
								width={15}
							/>{' '}
							<strong>MongoDB</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<img
								src={assets.expressLogo}
								alt='express-logo'
								width={15}
							/>{' '}
							<strong>Express.js</strong>
						</p>
					</article>
					<article className='skill-article'>
						<p>
							<em className='fa-brands fa-node node-icon'></em>
							<strong> Node.js</strong>
						</p>
					</article>

					<article className='skill-article'>
						<p>
							<em className='fa-brands fa-git-alt git-icon'></em>
							<strong> Git</strong>
						</p>
					</article>
				</div>
			</Section>
		</main>
	)
}
