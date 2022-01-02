import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsModule } from "../posts/posts.module";
import { UsersController } from "./users.controller";
import { PostEntity } from "../posts/post.entity";
import { UsersService } from "./users.service";
import { UserEntity } from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity]), PostsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
