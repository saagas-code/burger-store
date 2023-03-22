import { IsBoolean, IsEmail, IsOptional, IsString  } from "class-validator";
import { Type } from 'class-transformer';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string

  @IsString()
  password: string

  @Type(() => Number)
  @IsBoolean()
  @IsOptional()
  admin?: boolean
  
  @IsString()
  @IsOptional()
  image?: string
}