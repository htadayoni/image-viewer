import { Category } from './../category/types';

export const SET_IMAGES = 'SET_IMAGES';
export const RESET_IMAGES = 'RESET_IMAGES';

export interface ImageState {
  list: Image[] | [];
}

export interface Image {
  breeds: any[];
  categories: Category[];
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface SetImages {
  type: typeof SET_IMAGES | typeof RESET_IMAGES;
  payload: Image[] | [];
}