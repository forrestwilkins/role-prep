// TODO: Remove all use of Prisma

import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User as UserModel } from ".prisma/client";
import { PostsService } from "../../posts/posts.service";
import { PrismaService } from "../../prisma/prisma.service";
import { DEFAULT_DB } from "../../../constants/common";
import { UsersController } from "../users.controller";
import { PostEntity } from "../../posts/post.entity";
import { UsersService } from "../users.service";
import { UserEntity } from "../user.entity";

describe("UsersController", () => {
  let usersService: UsersService;
  let usersController: UsersController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: DEFAULT_DB,
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USERNAME,
          database: process.env.TEST_DB_NAME,
          entities: ["./**/*.entity.ts"],
          keepConnectionAlive: true,
          synchronize: false,
        }),

        TypeOrmModule.forFeature([UserEntity, PostEntity]),
      ],
      providers: [UsersService, PostsService, PrismaService],
      controllers: [UsersController],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe("getUsers", () => {
    it("should return an array of users", async () => {
      const result: UserModel[] = [
        {
          id: 1,
          name: "name1",
          password: "pass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "name2",
          password: "pass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest
        .spyOn(usersService, "users" as never)
        .mockImplementation(() => result as never);

      expect(await usersController.getUsers()).toBe(result);
    });
  });

  describe("getUserById", () => {
    it("should return a single user", async () => {
      const result: UserModel = {
        id: 1,
        name: "name1",
        password: "pass",
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest
        .spyOn(usersService, "user" as never)
        .mockImplementation(() => result as never);

      expect(await usersController.getUserById("1")).toBe(result);
    });
  });
});
