import {combineReducers, configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movie.slice";
import genreReducer from "./slices/genre.slice";
import themeReducer from "./slices/theme.slice";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
    themeReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
