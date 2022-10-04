import { applyDecorators, UseGuards } from '@nestjs/common'
import { AdminGuard } from '../guards/adminGuard'
import { JwtGuard } from '../guards/jwtGuard'

export const Roles = (role: typeRole = 'user') =>
	applyDecorators(
		role === 'admin' ? UseGuards(JwtGuard, AdminGuard) : UseGuards(JwtGuard)
	)
