import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {currentWeatherReducer} from "./weatherReducer";
const rootReducer = combineReducers({
    weather: currentWeatherReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export const store = createStore(rootReducer, applyMiddleware(thunk));