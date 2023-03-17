import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { SwaggerModule } from '@nestjs/swagger';
import { readFile } from 'fs/promises';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))

  // const document = JSON.parse(
  //   (await readFile(join(process.cwd(), './src/swagger.json'))).toString('utf-8')
  // )
  // SwaggerModule.setup('/api', app, document);

  app.enableCors();
  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();
