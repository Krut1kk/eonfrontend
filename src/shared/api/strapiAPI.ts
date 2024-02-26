// redux
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// redux
import { getUserState } from "@/enteties/user";
// constants
import { strapiURL } from "../libs/constants/strapiURL";
import { JWT_TOKEN } from "../libs/constants/jwtToken";
// types
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";

export const strapiAPI = createApi({
  reducerPath: "strapiApi",
  baseQuery: fetchBaseQuery({
    baseUrl: strapiURL,

    prepareHeaders: (headers, { getState }) => {
      const { isLoggedIn } = getUserState(getState() as StateSchema);

      if (isLoggedIn) {
        headers.set(
          "Authorization",
          `Bearer ${localStorage.getItem(JWT_TOKEN)}`
        );
      }

      return headers;
    },
  }),

  endpoints: (_builder) => ({}),
});
