import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserModel } from '../user.model'
type userFields = keyof UserModel
export const User = createParamDecorator(
	(data: userFields, ctx: ExecutionContext) => {
		const req = ctx.switchToHttp().getRequest<{ user: UserModel }>()
		const user = req.user
		return data ? user[data] : user
	}
)
