import { Module } from '@nestjs/common';
import { ProductDatabaseModule } from './modules/products/database.module';
import { ProductHttpModule } from './modules/products/http.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserDatabaseModule } from './modules/users/database.module';
import { UserHttpModule } from './modules/users/http.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ProductDatabaseModule,
    ProductHttpModule,
    UserDatabaseModule,
    UserHttpModule,
    SharedModule,
    
    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
