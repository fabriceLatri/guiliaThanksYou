import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignInAction, SignUpAction } from '@infrastructure/RTK/auth/thunks/types';
import { AuthService } from '@domain/services';
import { AuthError } from '@domain/errors';

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async ({ authService, email, password }: SignInAction, { rejectWithValue }) => {
    try {
      return await authService.signInAsync(email, password);
    } catch (error) {
      return rejectWithValue(new AuthError(error instanceof Error ? error.message : 'Unknown Error'));
    }
  },
);

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async ({ authService, email, password }: SignUpAction, { rejectWithValue }) => {
    try {
      return await authService.signUpAsync(email, password);
    } catch (error) {
      return rejectWithValue(new AuthError(error instanceof Error ? error.message : 'Unknown Error'));
    }
  },
);

export const signOutThunk = createAsyncThunk('auth/signout', async (authService: AuthService, { rejectWithValue }) => {
  try {
    return await authService.signOutAsync();
  } catch (error) {
    return rejectWithValue(new AuthError(error instanceof Error ? error.message : 'Unknown Error'));
  }
});

export const getUserIsAuthenticatedThunk = createAsyncThunk(
  'auth/getUserIsAuthenticated',
  async (authService: AuthService, { rejectWithValue }) => {
    try {
      return await authService.getUserIsAuthenticatedAsync();
    } catch (error) {
      return rejectWithValue(new AuthError(error instanceof Error ? error.message : 'Unknown Error'));
    }
  },
);
