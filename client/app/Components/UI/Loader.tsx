import CircularProgress from '@mui/material/CircularProgress'
import cn from 'classnames'
import React, { FC } from 'react'

const Loader: FC<{ className?: string }> = ({ className }) => {
	return (
		<div
			className={cn(
				'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
				className
			)}
		>
			<CircularProgress />
		</div>
	)
}

export default Loader
