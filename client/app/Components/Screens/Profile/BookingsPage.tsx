import { FC } from 'react'

import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import BookingsList from './BookingsList/BookingsList'

const BookingsPage: FC = () => {
	return (
		<ProfileLayout>
			<BookingsList />
		</ProfileLayout>
	)
}

export default BookingsPage
