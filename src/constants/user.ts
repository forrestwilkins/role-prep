import { API_ROOT } from "./common";

export const LOGIN_PATH = `${API_ROOT}/auth/login`;

export enum UserFieldNames {
  Email = "email",
  Name = "name",
  Password = "password",
  Username = "username",
}
