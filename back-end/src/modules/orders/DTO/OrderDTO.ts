import { ORDER_STATUS } from "@prisma/client";
import { Type } from "class-transformer";
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";
import { OrderItemDTO } from "./OrderItemDTO";

export class OrderDTO {
  @IsArray()
  items: OrderItemDTO

  @IsString()
  @IsNotEmpty()
  @IsEnum(ORDER_STATUS)
  orderStatus: ORDER_STATUS;

}
