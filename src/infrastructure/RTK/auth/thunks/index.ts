import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  SignInAction,
  SignUpAction,
} from '@infrastructure/RTK/auth/thunks/types';
import {AuthService} from '@domain/services/auth/authService';
import {authFirebaseRepository} from '@infrastructure/repositories/auth/firebase/authRepository';
import {AuthError} from '@domain/models/errors/auth/authError';

const authService = new AuthService(new authFirebaseRepository());

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async ({email, password}: SignInAction, {rejectWithValue}) => {
    try {
      return await authService.signInAsync(email, password);
    } catch (error) {
      return rejectWithValue(
        new AuthError(error instanceof Error ? error.message : 'Unknown Error'),
      );
    }
  },
);

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async ({email, password}: SignUpAction, {rejectWithValue}) => {
    try {
      return await authService.signUpAsync(email, password);
    } catch (error) {
      return rejectWithValue(
        new AuthError(error instanceof Error ? error.message : 'Unknown Error'),
      );
    }
  },
);

export const signOutThunk = createAsyncThunk(
  'auth/signout',
  async (_, {rejectWithValue}) => {
    try {
      return await authService.signOutAsync();
    } catch (error) {
      return rejectWithValue(
        new AuthError(error instanceof Error ? error.message : 'Unknown Error'),
      );
    }
  },
);

export const getUserIsAuthenticatedThunk = createAsyncThunk(
  'auth/getUserIsAuthenticated',
  async (_, {rejectWithValue}) => {
    try {
      return await authService.getUserIsAuthenticatedAsync();
    } catch (error) {
      return rejectWithValue(
        new AuthError(error instanceof Error ? error.message : 'Unknown Error'),
      );
    }
  },
);
