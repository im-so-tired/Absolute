import {mainFormActions} from './Slices/MainForm/MainFormSlice'
import * as userActions from './Slices/User/User.action'

export const allUserActions = {
	...userActions,
}

export const allFormActions = {
	...mainFormActions
}
