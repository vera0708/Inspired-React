import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice.js';
import colorReducer from './features/navColorSlice.js';

const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorReducer,
});

export default rootReducer