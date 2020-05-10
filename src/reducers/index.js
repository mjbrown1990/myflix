import { combineReducers } from "redux";
import genres from "./genres";
import billboard from "./billboard";

const rootReducer = combineReducers({
    genres,
    billboard,
});

export default rootReducer;
