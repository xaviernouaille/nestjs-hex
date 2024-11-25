import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Active la transformation des objets en instances de classe
      whitelist: true, // Ignore les propriétés non définies dans le DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
