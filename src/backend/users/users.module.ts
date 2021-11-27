import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsModule } from "../posts/posts.module";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User]), PostsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
