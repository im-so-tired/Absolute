import {
	addHuman,
	changeComforts,
	changeDateComing,
	changeDateExit,
	changePriceRange,
	changeReach,
	changeTerms,
	removeHuman,
	resetData,
} from './Slices/MainForm/MainFormSlice'
import * as userActions from './Slices/User/User.action'

export const allUserActions = {
	...userActions,
}

export const mainFormActions = {
	addHuman,
	removeHuman,
	changeDateComing,
	changeDateExit,
	resetData,
	changePriceRange,
	changeComforts,
	changeReach,
	changeTerms,
}
