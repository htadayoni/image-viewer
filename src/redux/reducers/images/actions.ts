import {
  RESET_IMAGES,
  SET_IMAGES,
  SetImages,
  Image
} from './types';

export const resetImages = (): SetImages => ({
  type: RESET_IMAGES,
  payload: []
});

export const setImages = (payload: Image[]): SetImages => ({
  type: SET_IMAGES,
  payload
});
