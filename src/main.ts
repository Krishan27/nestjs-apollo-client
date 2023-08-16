// src/main.ts
import { NestFactory } from '@nestjs/core';
import { SpaceXModule } from './spacex.module';

async function bootstrap() {
  const app = await NestFactory.create(SpaceXModule);
  await app.listen(3000);
}
bootstrap();
