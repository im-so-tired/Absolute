import { Controller, Get, HttpCode } from '@nestjs/common'
import { Roles } from 'src/auth/decorators/roles'
import { User } from './decorators/user.decorator'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Roles()
	getProfile(@User('_id') id: string) {
		return this.userService.getById(id)
	}
}
