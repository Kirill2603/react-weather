import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {WeatherReducer} from "./weather-reducer";

const rootReducer = combineReducers({
    WeatherReducer: WeatherReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>;