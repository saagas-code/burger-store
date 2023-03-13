
import { Module } from '@nestjs/common';
import { ListCategoryController } from '../services/listCategory/listCategoryController';
import { ListCategoryUseCase } from '../services/listCategory/listCategoryUseCase';
import { ProductDatabaseModule } from './database.module';

@Module({
  imports: [
    ProductDatabaseModule,
  ],
  controllers: [
    ListCategoryController
  ],
  providers: [
    ListCategoryUseCase
  ],
  exports: []
  
})

export class ProductHttpModule {}