/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Asegúrate de importar AppModule correctamente
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Pasar AppModule en lugar de databaseConfig
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
