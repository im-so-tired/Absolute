import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { UserModel } from 'src/user/user.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { AuthDto } from './dto/auth.dto'
import { compare, genSalt, hash } from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { RefreshTokenDto } from './dto/refreshToken.dto'
import { Register } from './dto/register.dto'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
		private readonly JwtService: JwtService
	) {}
	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)
		const tokens = await this.issueTokenPair(String(user._id))
		return {
			user: this.returnUserFields(user),
			...tokens,
		}
	}

	async getNewTokens({ refreshToken }: RefreshTokenDto) {
		if (!refreshToken) throw new UnauthorizedException('Please sign in!')
		try {
			const result = await this.JwtService.verifyAsync(refreshToken)
			const user = await this.UserModel.findById(result._id)
			const tokens = await this.issueTokenPair(String(user._id))
			return {
				user: this.returnUserFields(user),
				...tokens,
			}
		} catch (error) {
			throw new UnauthorizedException('Invalid token or expired')
		}
	}

	async register(dto: Register) {
		const oldUser = await this.UserModel.findOne({ email: dto.email })
		if (oldUser)
			throw new BadRequestException(
				'User with this email is already in the system'
			)
		const salt = await genSalt(10)
		const newUser = new this.UserModel({
			...dto,
			password: await hash(dto.password, salt),
		})
		const tokens = await this.issueTokenPair(String(newUser._id))
		newUser.save()
		return {
			user: this.returnUserFields(newUser),
			...tokens,
		}
	}

	async validateUser(dto: AuthDto) {
		const user = await this.UserModel.findOne({ email: dto.email })
		if (!user) throw new UnauthorizedException('User not found')
		const isValidPassword = await compare(dto.password, user.password)
		if (!isValidPassword) throw new UnauthorizedException('Invalid password')
		return user
	}

	async issueTokenPair(userId: string) {
		const data = { _id: userId }
		const refreshToken = await this.JwtService.signAsync(data, {
			expiresIn: '15d',
		})

		const accessToken = await this.JwtService.signAsync(data, {
			expiresIn: '1h',
		})

		return { refreshToken, accessToken }
	}
	returnUserFields(user: UserModel) {
		return {
			id: user._id,
			firstName: user.firstName,
			secondName: user.secondName,
			gender: user.gender,
			birthYear: user.birthYear,
			email: user.email,
			isAdmin: user.isAdmin,
		}
	}
}
