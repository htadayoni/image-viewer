import {
  SET_CATEGORIES,
  SetCategories,
  CategoryState
} from "./types";

const initialState: CategoryState = {
  list: []
};

export const category = (state = initialState, action: SetCategories): CategoryState => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        list: action.payload
      };
    default :
      return state
  }

};
