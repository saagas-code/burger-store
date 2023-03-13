
import { Module } from '@nestjs/common';
import { ListCategoryController } from './services/listCategory/listCategoryController';
import { ListCategoryUseCase } from './services/listCategory/listCategoryUseCase';
import { ProductDatabaseModule } from './database.module';
import { CreateCategoryController } from './services/createCategory/createCategoryController';
import { CreateCategoryUseCase } from './services/createCategory/createCategoryUseCase';
import { DeleteCategoryController } from './services/deleteCategory/deleteCategoryController';
import { DeleteCategoryUseCase } from './services/deleteCategory/deleteCategoryUseCase';

@Module({
  imports: [
    ProductDatabaseModule,
  ],
  controllers: [
    ListCategoryController,
    CreateCategoryController,
    DeleteCategoryController
  ],
  providers: [
    ListCategoryUseCase,
    CreateCategoryUseCase,
    DeleteCategoryUseCase
  ],
  exports: []
  
})

export class ProductHttpModule {}