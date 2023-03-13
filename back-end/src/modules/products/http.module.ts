
import { Module } from '@nestjs/common';
import { ListCategoryController } from './services/listCategory/listCategoryController';
import { ListCategoryUseCase } from './services/listCategory/listCategoryUseCase';
import { ProductDatabaseModule } from './database.module';
import { CreateCategoryController } from './services/createCategory/createCategoryController';
import { CreateCategoryUseCase } from './services/createCategory/createCategoryUseCase';

@Module({
  imports: [
    ProductDatabaseModule,
  ],
  controllers: [
    ListCategoryController,
    CreateCategoryController
  ],
  providers: [
    ListCategoryUseCase,
    CreateCategoryUseCase
  ],
  exports: []
  
})

export class ProductHttpModule {}