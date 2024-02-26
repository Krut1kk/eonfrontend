// redux
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// reducers
import { userReducer } from "@/enteties/user";
// api
import { strapiAPI } from "@/shared/api/strapiAPI";
// types
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    [strapiAPI.reducerPath]: strapiAPI.reducer,
  };

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(strapiAPI.middleware),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
