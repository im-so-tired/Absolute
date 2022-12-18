import { NextPage } from 'next'

import AdminDashboard from '@/components/Screens/Profile/AdminDashboard'

import { NextPageAuth } from '@/shared/types/auth.types'

const dashboard: NextPageAuth = () => {
	return <AdminDashboard />
}

dashboard.isOnlyAdmin = true
export default dashboard
