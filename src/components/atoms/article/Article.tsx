import { articleType } from '../../../types/Types'

export type TArticle = {
	children: React.ReactNode
	type: articleType
}

export const Article = ({ children, type }: TArticle) => {
	return <article className={type}>{children}</article>
}
