import { FC } from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const ReduxToastr: FC = () => {
	return (
		<ReduxToastrLib
			timeOut={4000}
			newestOnTop={false}
			preventDuplicates
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			progressBar
			closeOnToastrClick
		/>
	)
}

export default ReduxToastr
