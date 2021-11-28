import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DEFAULT_DB, Environments } from "../constants/common";

const config: TypeOrmModuleOptions = {
  type: DEFAULT_DB,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/**/*.entity{.ts,.js}"],
  synchronize: process.env.NODE_ENV === Environments.Development,
  keepConnectionAlive: true,
};

export default config;
