import { NextPage } from 'next'
import React from 'react'

import BookingsPage from '@/components/Screens/Profile/BookingsPage'

import { NextPageAuth } from '@/shared/types/auth.types'

const BookingPage: NextPageAuth = () => {
	return <BookingsPage />
}

BookingPage.isOnlyUser = true
export default BookingPage
