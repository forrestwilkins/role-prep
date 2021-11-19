// TODO: Verify that reflect-metadata is necessary here

import "reflect-metadata";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NextApiHandler } from "next";
import { Server } from "http";
import { AppModule } from "./app.module";

let app: INestApplication;

export const getApp = async () => {
  if (!app) {
    app = await NestFactory.create(AppModule, { bodyParser: false });
    app.setGlobalPrefix("api");

    const config = new DocumentBuilder()
      .setTitle("Social API")
      .setDescription("Social API built with NestJS and Prisma")
      .setVersion("1.0")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api/swagger", app, document);

    await app.init();
  }
  return app;
};

export const getListener = async (): Promise<NextApiHandler<unknown>> => {
  const app = await getApp();
  const server: Server = app.getHttpServer();
  const [listener] = server.listeners("request") as NextApiHandler[];
  return listener;
};
