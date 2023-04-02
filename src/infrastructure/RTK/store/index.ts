import {configureStore} from '@reduxjs/toolkit';
import authSlice from '@infrastructure/RTK/auth/slices/auth-slice';
import {curryGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: curryGetDefaultMiddleware =>
    curryGetDefaultMiddleware({
      serializableCheck: false,
    }),
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
