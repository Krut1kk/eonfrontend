// redux
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// constants
import { JWT_TOKEN } from "@/shared/libs/constants/jwtToken";
// types
import { IUserResponseSchema, UserSchema } from "../types/user";

const initialState: UserSchema = {
  isLoggedIn: false,
  user: {
    isAccountConnected: false,
    id: null,
    email: null,
    firstName: null,
    password: null,
    lastName: null,
    username: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserResponseSchema>) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      localStorage.setItem(JWT_TOKEN, action.payload.jwt);
    },
    logout(state) {
      state.user = initialState.user;
      state.isLoggedIn = false;
      localStorage.removeItem(JWT_TOKEN);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
