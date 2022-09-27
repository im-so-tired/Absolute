import cn from 'classnames'
import React, { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className,
}) => {
	return <div className={cn('container', className)}>{children}</div>
}

export default Container
