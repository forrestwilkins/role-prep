export const API_ROOT = "/api";
export const SWAGGER_JSON = "swagger-json";
export const DEFAULT_DB = "postgres";

export enum ResourceNames {
  Events = "events",
  Followers = "followers",
  Following = "following",
  Invites = "invites",
  Members = "members",
  Requests = "requests",
  Roles = "roles",
  Settings = "settings",
  Users = "users",
  Posts = "posts",
  Groups = "groups",
}

export enum NavigationPaths {
  About = "/about",
  Edit = "/edit",
  Home = "/",
  LogIn = "/users/login",
  SignUp = "/users/signup",
  Swagger = "/swagger",
}

export enum FieldNames {
  Body = "body",
  Description = "description",
  Email = "email",
  Name = "name",
  Password = "password",
  Query = "query",
}

export enum Environments {
  Development = "development",
  Production = "production",
}

export enum DirectoryNames {
  Public = "public",
  Uploads = "uploads",
  Defaults = "defaults",
}

export enum ToastStatus {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning",
}

export enum PageSizes {
  Min = 5,
  Max = 20,
  Default = 10,
}

export enum KeyCodes {
  Enter = "Enter",
  Escape = "Escape",
}

export enum Events {
  Keydown = "keydown",
  Resize = "resize",
  Scroll = "scroll",
}

export enum ScrollDirections {
  Up = "up",
  Down = "down",
}

export enum TruncationSizes {
  ExtraSmall = 30,
  Small = 40,
  Medium = 65,
  Large = 175,
}

export interface ToastNotification {
  title: string;
  status: ToastStatus;
}
