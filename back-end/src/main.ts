import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))

  // app.useStaticAssets(join(__dirname, '..', 'public'));

  app.enableCors();
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
