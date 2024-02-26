export { userActions, userReducer } from "./model/slice/userSlice";

export { getUserState } from "./model/selectors/getUserState";

export { useUpdateUserMutation } from "./model/api/userAPI";

export type { UserSchema } from "./model/types/user";
