import { FC } from 'react'

import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import RoomsListTable from './AdminTables/RoomsListTable/RoomsListTable'

const AdminDashboard: FC = () => {
	return (
		<ProfileLayout>
			<RoomsListTable />
		</ProfileLayout>
	)
}

export default AdminDashboard
