import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DEFAULT_DB, Environments } from "../constants/common";
import { CommentEntity } from "./comments/comment.entity";
import { PostEntity } from "./posts/post.entity";
import { UserEntity } from "./users/user.entity";

const config: TypeOrmModuleOptions = {
  type: DEFAULT_DB,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserEntity, PostEntity, CommentEntity],
  synchronize: process.env.NODE_ENV === Environments.Development,
  keepConnectionAlive: true,
  autoLoadEntities: true,
};

export default config;
