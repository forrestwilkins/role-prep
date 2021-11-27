import { DEFAULT_DB, Environments } from "../constants/common";

export default {
  type: DEFAULT_DB,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/backend/**/**.entity.ts"],
  synchronize: process.env.NODE_ENV === Environments.Development,
};
