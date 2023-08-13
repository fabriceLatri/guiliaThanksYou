import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetPicturesAction } from '@infrastructure/RTK/picture/thunks/types';
import { HttpError } from '@domain/errors/httpError';

export const getPicturesThunk = createAsyncThunk(
  'pictures/getpictures',
  async ({ pictureService }: GetPicturesAction, { rejectWithValue }) => {
    try {
      return await pictureService.getPictures();
    } catch (error) {
      return rejectWithValue(new HttpError(0, error instanceof Error ? error.message : 'Unknown Error'));
    }
  },
);
