import { IsDate, IsNotEmpty, IsString  } from "class-validator";


export class CreateTokenDTO {

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  refresh_token: string;

  @IsDate()
  @IsNotEmpty()
  expired_date: Date;

  
}