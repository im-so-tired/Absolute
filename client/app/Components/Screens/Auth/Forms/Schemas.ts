import * as yup from 'yup'

export const schemaRegister = yup.object().shape({
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
	email: yup
		.string()
		.email('Неправильный формат email')
		.required('Поле "Email" обязательно для заполнения'),
	password: yup
		.string()
		.min(6, 'Пароль должен содержать не менее 6 символов')
		.required('Поле "Пароль" обязательно для заполнения'),
})

export const schemaLogin = yup.object({
	email: yup
		.string()
		.email('Неправильный формат email')
		.required('Поле "Email" обязательно для заполнения'),
	password: yup
		.string()
		.min(6, 'Пароль должен содержать не менее 6 символов')
		.required('Поле "Пароль" обязательно для заполнения'),
})
