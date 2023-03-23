import { IsEmail, IsNotEmpty, IsString  } from "class-validator";


export class AuthUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}