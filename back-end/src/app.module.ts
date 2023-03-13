import { Module } from '@nestjs/common';
import { ProductDatabaseModule } from './modules/products/database.module';
import { ProductHttpModule } from './modules/products/http.module';

@Module({
  imports: [
    ProductDatabaseModule,
    ProductHttpModule
  ],
})
export class AppModule {}
