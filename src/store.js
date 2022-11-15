import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice";
import user from "./feature/user/user";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: user,
  },
});
