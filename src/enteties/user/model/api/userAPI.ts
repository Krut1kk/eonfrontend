// api
import { strapiAPI } from "@/shared/api/strapiAPI";
// types
import { IUser } from "../types/user";

const userAPI = strapiAPI.injectEndpoints({
  endpoints: (build) => ({
    updateUser: build.mutation<IUser, Partial<IUser>>({
      query: (updatedUser) => ({
        url: `/users/${updatedUser.id}`,
        method: "PUT",
        body: updatedUser,
      }),
    }),
  }),
});

export const { useUpdateUserMutation } = userAPI;
