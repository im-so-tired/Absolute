/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const primary = '#2196F3'

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
		'./.next/**/*.{js, html}'
	],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			red: colors.red,
			gray: {
				300: '#DEDEE3',
				400: '#C4C4C4',
				500: '#8F8FA0',
			},
			blue: {
				300: '#21BFF3',
				400: '#8CBAE8',
				500: '#1976D2',
				600: '#1f2041',
			},
			fuchsia: '#BC9CFF',
		},
		extend: {
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			borderRadius: {
				common: '0.25rem',
			},
		},
	},
	plugins: [
		// require('@tailwindcss/forms'),
		plugin(function ({addUtilities, addComponents, theme}) {
			addComponents({
				'.btn-primary': {
					backgroundColor: primary,
					borderRadius: theme('borderRadius.common'),
					color: '#FFF',
					textTransform: 'uppercase',
					boxShadow:
						'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;',
					cursor: 'pointer',
					transitionProperty: theme('transitionProperty.shadow'),
					transitionDuration: '200ms',
					'&:hover': {
						boxShadow:
							'rgb(0 0 0 / 20%) 0px 3px 10px -2px, rgb(0 0 0 / 14%) 0px 2px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;',
						transitionProperty: theme('transitionProperty.shadow'),
						transitionDuration: '200ms',
					},
				},
				'.myField': {
					border: `1px solid ${theme('colors.gray[400]')}`,
					borderRadius: theme('borderRadius.common'),
				},
				'.formContainer': {
					display: 'inline-block',
					backgroundColor: 'white',
					boxShadow: theme('boxShadow.md'),
					borderRadius: theme('borderRadius.common'),
					width: '380px',
				},
			}),
				addUtilities({
					'.flex-center': {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					},
					'.container': {
						width: '1200px',
						margin: '0 auto',
					},
				})
		}),
	],
}
