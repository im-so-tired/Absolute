/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				// destination: 'http://localhost:9000/api/:path*',
				destination: 'http://nest-api/api/:path*'
			},
		]
	},
}

module.exports = nextConfig
