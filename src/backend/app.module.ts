import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { UsersModule } from "./users/users.module";
import { CommentsModule } from "./comments/comments.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UsersModule,
    PostsModule,
    CommentsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
