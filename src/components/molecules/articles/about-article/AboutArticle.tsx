import { articleType } from '../../../../types/Types'
import { Article } from '../../../atoms'

export type TAboutArticle = {
	aboutData: React.ReactNode
}

export const AboutArticle = ({ aboutData }: TAboutArticle) => {
	return (
		<Article type={articleType.ABOUT}>
			<p>{aboutData}</p>
		</Article>
	)
}
