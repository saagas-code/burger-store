import { IsString } from "class-validator";



export class CreateNotificationDTO {
  @IsString()
  title: string

  @IsString()
  message: string

  @IsString()
  user_id: string

}