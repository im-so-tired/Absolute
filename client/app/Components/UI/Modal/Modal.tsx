import { Box, Modal, Typography } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

import styles from './Modal.module.scss'

export interface IModal {
	open: boolean
	handleClose: () => void
}

const ModalBase: FC<PropsWithChildren<IModal>> = ({
	open,
	handleClose,
	children,
}) => {
	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={styles.modal}>{children}</Box>
		</Modal>
	)
}

export default ModalBase
