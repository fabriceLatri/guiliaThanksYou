import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {signInThunk} from '@infrastructure/RTK/auth/thunks';
import {AuthState} from '@infrastructure/RTK/auth/slices/types';
import Toast from 'react-native-toast-message';

const initialState = null as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (
      state: AuthState,
      {payload}: PayloadAction<FirebaseAuthTypes.User>,
    ) => {
      const {uid: id, email, isAnonymous} = payload;

      if (!email) return state;

      return {
        loading: false,
        id,
        email,
        isAnonymous,
      };
    },
    authError: (state: AuthState) => null,
  },
  extraReducers: builder => {
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      // Add user to the state array
      const {uid: id, email, isAnonymous} = action.payload;

      if (!email) return state;

      return {
        loading: false,
        id,
        email,
        isAnonymous,
      };
    });
    builder.addCase(signInThunk.rejected, (state, action) => {
      const {payload} = action;

      if (payload instanceof Error) {
        Toast.show({
          type: 'error',
          text1: 'Erreur!',
          text2: 'Email ou mot de passe incorrects',
        });
      }
      return state;
    });
  },
});

const {authSuccess, authError} = authSlice.actions;
export default authSlice;
