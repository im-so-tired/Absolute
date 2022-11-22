import { combineReducers } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'

import reviewsSlice from '@/store/Slices/Reviews/ReviewsSlice'

import mainFormReducer from './Slices/MainForm/MainFormSlice'
import userReducer from './Slices/User/User.slice'

const reducers = {
	mainForm: mainFormReducer,
	user: userReducer,
	reviews: reviewsSlice,
	toastr: toastrReducer,
}

export const rootReducer = combineReducers(reducers)
