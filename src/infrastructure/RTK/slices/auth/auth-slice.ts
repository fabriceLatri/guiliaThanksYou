import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState} from '@infrastructure/RTK/slices/auth/interfaces';

const initialState = {
  authLoading: false,
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  role: [],
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state: AuthState, {payload}: PayloadAction<AuthState>) => ({
      authLoading: false,
      id: payload.id,
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      role: payload.role,
    }),
    authError: (state: AuthState, {payload}: PayloadAction<AuthState>) => ({
      ...state,
      error: payload.error,
    }),
  },
});

const {authSuccess, authError} = authSlice.actions;
export default authSlice.reducer;
