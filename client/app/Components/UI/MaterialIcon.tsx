import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { iconsTypes } from '@/shared/types/iconTypes'

const MaterialIcon: FC<{ name: iconsTypes }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
