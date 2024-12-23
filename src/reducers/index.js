// import tagReducer from "./tags";
import formReducer from './form'
import userReducer from './user'
import generateImageReducer from './generateImage';
import { combineReducers } from "redux";
import imageReducer from './image';


const rootReducer = combineReducers({
  // tagReducer,
  formReducer,
  userReducer,
  generateImageReducer,
  imageReducer
});

export default rootReducer;