import { strapiAPI } from "@/shared/api/strapiAPI";
// types
import { UserSchema } from "@/enteties/user";

export interface StateSchema {
  user: UserSchema;
  [strapiAPI.reducerPath]: ReturnType<typeof strapiAPI.reducer>;
}
