import { createSlice } from '@reduxjs/toolkit';
import {
  signInThunk, signOutThunk, signUpThunk, getUserIsAuthenticatedThunk,
} from '@infrastructure/RTK/auth/thunks';
import { AuthState } from '@infrastructure/RTK/auth/slices/types';
import { AuthError } from '@domain/errors';

const initialState = {
  loading: false,
  id: '',
  email: '',
  isAnonymous: true,
  error: null,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      // Add user to the state array
      const { id, email, isAnonymous } = action.payload;

      if (!email) return state;

      return {
        loading: false,
        id,
        email,
        isAnonymous,
      } as AuthState;
    });
    builder.addCase(signUpThunk.rejected, (state, action) => {
      const { payload } = action;

      return {
        ...state,
        error: payload as AuthError,
      };
    });
    builder.addCase(signInThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      // Add user to the state array
      const { id, email, isAnonymous } = action.payload;

      if (!email) return state;

      return {
        loading: false,
        id,
        email,
        isAnonymous,
      } as AuthState;
    });
    builder
      .addCase(signInThunk.rejected, (state, action) => {
        const { payload } = action;

        return {
          ...state,
          loading: false,
          error: payload as AuthError,
        };
      })
      .addCase(signOutThunk.fulfilled, (state) => initialState)
      .addCase(signOutThunk.rejected, (state, action) => {
        const { payload } = action;

        return {
          ...state,
          error: payload as AuthError,
        };
      });
    builder.addCase(getUserIsAuthenticatedThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getUserIsAuthenticatedThunk.fulfilled, (state, action) => {
      if (!action.payload) return initialState;
      // Add user to the state array
      const { id, email, isAnonymous } = action.payload;

      if (!email) return state;

      return {
        loading: false,
        id,
        email,
        isAnonymous,
      } as AuthState;
    });
    builder.addCase(getUserIsAuthenticatedThunk.rejected, (state, action) => {
      const { payload } = action;

      return {
        ...state,
        loading: false,
        error: payload as AuthError,
      };
    });
  },
});

export default authSlice;
