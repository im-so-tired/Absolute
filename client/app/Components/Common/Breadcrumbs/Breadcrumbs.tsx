import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink } from '@mui/material'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { UrlSeparator } from '@/utils/UrlSeparator'

import styles from './Breadcrumbs.module.scss'
import { BreadcrumbsTitles } from './BreadcrumbsTitles.dict'

const Breadcrumbs: FC = () => {
	const user = useAuth()
	const { asPath, pathname } = useRouter()
	const [urlParts, setUrlParts] = useState<string[]>(UrlSeparator(asPath))
	// UrlSeparator(asPath)

	// if (currnetUser) {
	// 	urlParts.push(currnetUser?.id)
	// }
	useEffect(() => {
		setUrlParts(UrlSeparator(asPath))
	}, [user, asPath])

	return user ? (
		<MuiBreadcrumbs aria-label="breadcrumb">
			<Link href="/" passHref>
				<MuiLink underline="hover" color="primary" fontFamily={'Montserrat'}>
					Главная
				</MuiLink>
			</Link>
			{urlParts.map((part, index) => {
				const routeTo = `/${urlParts.slice(0, index + 1).join('/')}`
				const text =
					part === user?.id
						? `${user.firstName} ${user.secondName}`
						: BreadcrumbsTitles[part]
						? BreadcrumbsTitles[part]
						: part
				const isLast = index === urlParts.length - 1
				return isLast ? (
					<Typography
						key={index}
						color="text.primary"
						fontFamily={'Montserrat'}
					>
						{text}
					</Typography>
				) : (
					<Link key={index} href={routeTo} className={styles.link} passHref>
						<MuiLink
							underline="hover"
							color="primary"
							fontFamily={'Montserrat'}
						>
							{text}
						</MuiLink>
					</Link>
				)
			})}
		</MuiBreadcrumbs>
	) : (
		<div>Loading...</div>
	)
}

export default Breadcrumbs
