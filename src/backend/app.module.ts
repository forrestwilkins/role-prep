import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { UsersModule } from "./users/users.module";
import { CommentsModule } from "./comments/comments.module";
import { DEFAULT_DB, Environments } from "../constants/common";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DEFAULT_DB,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.NODE_ENV === Environments.Development,
      keepConnectionAlive: true,
      autoLoadEntities: true,
    }),

    AuthModule,
    UsersModule,
    PostsModule,
    CommentsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
