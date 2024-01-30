import { ReactNode } from 'react'

type TA = {
	href: string
	children: ReactNode
	classname?: string
}

export const A = ({ href, children, classname }: TA) => {
	return (
		<a
			className={classname}
			href={href}
		>
			{children}
		</a>
	)
}
