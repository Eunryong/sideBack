import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userId: string;

  @IsString()
  email: string;

  @IsOptional()
  nickname: string;
}
