// types
import { IUser } from "@/enteties/user";

export interface AuthResponseSchema {
  jwt: string;
  user: IUser;
}

export interface RegisterResponseData extends AuthResponseSchema {}

export interface RegisterRequestData extends IUser {}

export interface LoginResponseData extends AuthResponseSchema {}

export interface LoginRequestData {
  identifier: string;
  password: string;
}
