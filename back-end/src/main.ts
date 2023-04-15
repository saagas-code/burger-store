import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { addAdminUser } from './instances/seeders/PrismaAdminSeed';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))

  app.enableCors();
  
  await addAdminUser();
  await app.listen(process.env.APP_PORT || 4000);
  
}
bootstrap();
