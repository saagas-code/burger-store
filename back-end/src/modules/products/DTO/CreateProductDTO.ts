import { Type } from "class-transformer";
import { IsString, IsNumber, IsOptional  } from "class-validator";
import {  } from "util";

export class CreateProductDTO {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  category_id: string;
}