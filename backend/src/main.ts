import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useBodyParser('json', { limit: '5mb' });
  app.setGlobalPrefix('api/v1', { exclude: ['health'] });
  app.enableCors({ origin: process.env.CORS_ORIGIN || '*' });
  const port = Number(process.env.PORT) || 5701;
  await app.listen(port, '::');
  console.log(`Encomendas CJDA3 Backend running on port ${port}`);
}
bootstrap();
