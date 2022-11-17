import {
	Body,
	Controller,
	Get,
	Param,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Roles } from 'src/auth/decorators/roles'
import { GenderValidate } from 'src/pipes/genderValidate'
import { IdValidate } from 'src/pipes/objectId.pipes'
import { User } from './decorators/user.decorator'
import { RoomId, UpdateDto } from './dto/update.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Roles()
	getProfile(@User('_id') id: string) {
		return this.userService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@Put('profile')
	@Roles()
	update(@User('_id') id: string, @Body(GenderValidate) dto: UpdateDto) {
		return this.userService.update(id, dto)
	}

	@Put('favourites/:id')
	@Roles()
	changeFavourites(
		@Param('id', IdValidate) roomId: string,
		@User('_id') id: string
	) {
		return this.userService.changeFavourite(id, roomId)
	}

	@Get(':id')
	getById(@Param('id', IdValidate) userId: string) {
		return this.userService.getById(userId)
	}
}
