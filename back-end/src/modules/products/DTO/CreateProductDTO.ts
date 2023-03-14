import { Type } from "class-transformer";
import { IsString, IsNumber, IsOptional  } from "class-validator";
import {  } from "util";
import { isNumberObject } from "util/types";


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