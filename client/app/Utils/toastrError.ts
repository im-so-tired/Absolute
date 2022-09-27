import { toastr } from 'react-redux-toastr'

import { errorMessage } from '@/helpers/ErrorMessage'

export const toastrError = (title: string, error: any) => {
	toastr.error(title || 'Bad Request', errorMessage(error))
}
