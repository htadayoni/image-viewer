import {
  RESET_IMAGES,
  SET_IMAGES,
  SetImages,
  ImageState
} from "./types";

const initialState: ImageState = {
  list: []
};

export const images = (state = initialState, action: SetImages): ImageState => {
  switch (action.type) {
    case RESET_IMAGES:
      return {
        list: []
      };
    case SET_IMAGES:
      return {
        ...state,
        list: [...state.list, ...action.payload]
      };
    default :
      return state
  }

};
