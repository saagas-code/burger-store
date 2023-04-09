import { IsNotEmpty, IsString } from "class-validator";



export class DeleteNotificationDTO {
  @IsString()
  @IsNotEmpty()
  notification_id

}