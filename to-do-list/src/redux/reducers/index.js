import { combineReducers } from 'redux';
import app from './toDoReducer';

const rootReducer = combineReducers({
    app,
});

export default rootReducer;
