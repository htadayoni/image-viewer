import {
  SET_CATEGORIES,
  SetCategories,
  Category
} from './types';

export const setCategories = (payload: Category[]): SetCategories => ({
  type: SET_CATEGORIES,
  payload
});