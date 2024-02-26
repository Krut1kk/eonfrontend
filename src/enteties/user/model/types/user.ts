export interface IUser {
  isAccountConnected: boolean;
  id: number | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
}

export interface IUserResponseSchema {
  jwt: string;
  user: IUser;
}

export interface UserSchema {
  isLoggedIn: boolean;
  user: IUser;
}
