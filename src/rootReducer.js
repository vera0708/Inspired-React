import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice.js';

const rootReducer = combineReducers({
    navigation: navigationReducer,
});

export default rootReducer