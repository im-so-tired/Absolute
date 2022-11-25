import { reviewsActions } from '@/store/Slices/Reviews/ReviewsSlice'

import { mainFormActions } from './Slices/MainForm/MainFormSlice'
import * as reviewsAsyncActions from './Slices/Reviews/Reviews.actions'
import * as userActions from './Slices/User/User.action'

export const allUserActions = {
	...userActions,
}
// union form actions
export const allFormActions = {
	...mainFormActions,
}

export const allReviewsActions = {
	...reviewsAsyncActions,
	...reviewsActions,
}
