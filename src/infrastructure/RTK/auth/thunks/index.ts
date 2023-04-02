import {createAsyncThunk} from '@reduxjs/toolkit';
import {SignInAction} from '@infrastructure/RTK/auth/thunks/types';
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
