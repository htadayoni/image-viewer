import {combineReducers} from "redux";
import {category} from "./category/reducers";
import {images} from "./images/reducers";

export const rootReducer = combineReducers({
  category,
  images
})

export type RootState = ReturnType<typeof rootReducer>