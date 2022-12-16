import * as yup from 'yup'

export const schemaEditRoom = yup.object().shape({
	firstName: yup
		.string()
		.min(2, 'Имя должно содержать не менее 2 символов')
		.required('Поле "Имя" обязательно для заполнения'),
	secondName: yup
		.string()
		.min(2, 'Фамилия должно содержать не менее 2 символов')
		.required('Поле "Фамилия" обязательно для заполнения'),
	gender: yup.string(),
	birthYear: yup.number(),
})
