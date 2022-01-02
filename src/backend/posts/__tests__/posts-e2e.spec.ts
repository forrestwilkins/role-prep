import supertest from "supertest";
import { Test } from "@nestjs/testing";
import { PostsModule } from "../posts.module";
import { PostsService } from "../posts.service";
import { INestApplication } from "@nestjs/common";
import { PrismaModule } from "../../prisma/prisma.module";
import { CommentsModule } from "../../comments/comments.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DEFAULT_DB } from "../../../constants/common";

const NOW = new Date().toDateString();

describe("Posts", () => {
  let app: INestApplication;
  const postsService = {
    posts: () => [
      {
        id: 1,
        userId: 1,
        title: "title1",
        body: "body1",
        createdAt: NOW,
        updatedAt: NOW,
      },
      {
        id: 2,
        userId: 1,
        title: "title2",
        body: "body2",
        createdAt: NOW,
        updatedAt: NOW,
      },
    ],
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: DEFAULT_DB,
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          database: process.env.TEST_DB_NAME,
          entities: ["./**/*.entity.ts"],
          synchronize: false,
        }),

        PostsModule,
        CommentsModule,
        PrismaModule,
      ],
    })
      .overrideProvider(PostsService)
      .useValue(postsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET posts`, () => {
    return supertest(app.getHttpServer())
      .get("/posts")
      .expect(200)
      .expect(postsService.posts());
  });

  afterAll(async () => {
    await app.close();
  });
});
