import {createSlice} from '@reduxjs/toolkit';
import {signInThunk} from '@infrastructure/RTK/auth/thunks';
import {AuthState} from '@infrastructure/RTK/auth/slices/types';
import {AuthError} from '@domain/models/errors/auth/authError';

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
  extraReducers: builder => {
    builder.addCase(signInThunk.pending, state => {
      return {...state, loading: true};
    });
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      // Add user to the state array
      const {uid: id, email, isAnonymous} = action.payload;

      if (!email) return state;

      return {
        loading: false,
        id,
        email,
        isAnonymous,
      } as AuthState;
    });
    builder.addCase(signInThunk.rejected, (state, action) => {
      const {payload} = action;

      return {
        ...state,
        error: payload as AuthError,
      };
    });
  },
});

export default authSlice;
