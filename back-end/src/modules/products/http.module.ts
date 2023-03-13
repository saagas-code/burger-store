
import { Module } from '@nestjs/common';
import { ListCategoryController } from './services/listCategory/listCategoryController';
import { ListCategoryUseCase } from './services/listCategory/listCategoryUseCase';
import { ProductDatabaseModule } from './database.module';
import { CreateCategoryController } from './services/createCategory/createCategoryController';
import { CreateCategoryUseCase } from './services/createCategory/createCategoryUseCase';
import { DeleteCategoryController } from './services/deleteCategory/deleteCategoryController';
import { DeleteCategoryUseCase } from './services/deleteCategory/deleteCategoryUseCase';
import { CreateProductController } from './services/createProduct/createProductController';
import { CreateProductUseCase } from './services/createProduct/createProductUseCase';

@Module({
  imports: [
    ProductDatabaseModule,
  ],
  controllers: [
    ListCategoryController,
    CreateCategoryController,
    DeleteCategoryController,
    CreateProductController
  ],
  providers: [
    ListCategoryUseCase,
    CreateCategoryUseCase,
    DeleteCategoryUseCase,
    CreateProductUseCase
  ],
  exports: []
  
})

export class ProductHttpModule {}