import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }), {
    snapshot: true,
    cors: process.env.NODE_ENV === "development"
  });
  await app.listen(5000, "0.0.0.0");
}

bootstrap().catch(console.error);
