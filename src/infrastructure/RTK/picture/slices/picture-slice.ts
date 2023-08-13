import { createSlice } from '@reduxjs/toolkit';
import { PicturesState } from '@infrastructure/RTK/picture/slices/types';
import { getPicturesThunk } from '@infrastructure/RTK/thunks';
import { HttpError } from '@domain/errors/httpError';

const initialState = {
  pictures: [],
  loading: false,
} as PicturesState;

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPicturesThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(getPicturesThunk.fulfilled, (state, action) => {
      // Add user to the state array
      const pictures = action.payload;

      return {
        ...state,
        loading: false,
        pictures,
      } as PicturesState;
    });
    builder.addCase(getPicturesThunk.rejected, (state, action) => {
      const { payload } = action;

      return {
        ...state,
        error: payload as HttpError,
      };
    });
  },
});

export default picturesSlice;
