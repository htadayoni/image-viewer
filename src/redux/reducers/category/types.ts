export const SET_CATEGORIES = 'SET_CATEGORIES';

export interface CategoryState {
  list: Category[] | [];
}

export interface Category {
  id: number;
  name: string;
}

export interface SetCategories {
  type: typeof SET_CATEGORIES;
  payload: Category[] | [];
}