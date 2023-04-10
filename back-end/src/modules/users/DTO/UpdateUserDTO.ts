import { IsBoolean, IsEmail, IsString  } from "class-validator";
import { Type } from 'class-transformer';

export class UpdateUserDTO {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string

  @IsString()
  password?: string

  @Type(() => Number)
  @IsBoolean()
  admin?: boolean
  
  @IsString()
  image?: string

  @IsString()
  verified_at?: Date
}