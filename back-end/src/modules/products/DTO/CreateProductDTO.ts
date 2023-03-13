import { Type } from "class-transformer";
import { IsString, IsNumber  } from "class-validator";
import {  } from "util";
import { isNumberObject } from "util/types";


export class CreateProductDTO {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsNumber()
  price: number;

  @IsString()
  category_id: string;
}