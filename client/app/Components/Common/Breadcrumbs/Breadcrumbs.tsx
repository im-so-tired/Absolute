import { Link, Breadcrumbs as MuiBreadcrumbs } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'

const Breadcrumbs = () => {
	return (
		<MuiBreadcrumbs aria-label="breadcrumb">
			<Link underline="hover" color="inherit" href="/">
				MUI
			</Link>
			<Link
				underline="hover"
				color="inherit"
				href="/material-ui/getting-started/installation/"
			>
				Core
			</Link>
			<Typography color="text.primary">Breadcrumbs</Typography>
		</MuiBreadcrumbs>
	)
}

export default Breadcrumbs
