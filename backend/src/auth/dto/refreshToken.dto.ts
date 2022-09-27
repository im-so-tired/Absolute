import { IsString } from 'class-validator'

export class RefreshTokenDto {
  @IsString({
    message: 'RefreshToken must be a string',
  })
  refreshToken: string
}
