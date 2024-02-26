// api
import { strapiAPI } from "@/shared/api/strapiAPI";
// types
import {
  LoginRequestData,
  LoginResponseData,
  RegisterRequestData,
  RegisterResponseData,
} from "../model/types/auth";

const authAPI = strapiAPI.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation<RegisterResponseData, RegisterRequestData>({
      query: (user) => ({
        url: `/auth/local/register`,
        method: "POST",
        body: user,
      }),
    }),
    loginUser: build.mutation<LoginResponseData, LoginRequestData>({
      query: (user) => ({
        url: `/auth/local`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authAPI;
