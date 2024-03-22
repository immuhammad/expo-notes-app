import { combineReducers } from "redux";
import counterSlice from "./redux/slices/counterSlice";

const rootReducer = combineReducers({
  counterReducer: counterSlice,
});

export default rootReducer;
