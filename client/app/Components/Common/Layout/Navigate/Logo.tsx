import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import logo from '@/assets/image/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="mr-28 h-[40px]">
				<Image src={logo} alt="logo"></Image>
			</a>
		</Link>
	)
}

export default Logo
