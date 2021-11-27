// TODO: Get NestJS tests passing with TypeORM

import { Test } from "@nestjs/testing";
import { User as UserModel } from ".prisma/client";
import { PostsService } from "../../posts/posts.service";
import { PrismaService } from "../../prisma/prisma.service";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user.entity";

describe("UsersController", () => {
  let usersService: UsersService;
  let usersController: UsersController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([User])],
      providers: [UsersService, PostsService, PrismaService],
      controllers: [UsersController],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe("getUsers", () => {
    it.skip("should return an array of users", async () => {
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
    it.skip("should return a single user", async () => {
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
