import {
	CanActivate,
	ExecutionContext,
	ForbiddenException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { UserModel } from 'src/user/user.model'

export class AdminGuard implements CanActivate {
	constructor(private reflector: Reflector) {}
	canActivate(context: ExecutionContext): boolean {
		const req = context.switchToHttp().getRequest<{ user: UserModel }>()
		const user = req.user
		if (!user.isAdmin) throw new ForbiddenException('Нou have no rights!')
		return user.isAdmin
	}
}
