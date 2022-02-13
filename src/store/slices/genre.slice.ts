import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";
import {genreService} from "../../services";

interface IGenreState {
    genres: IGenre[] | [];
}

const initialState: IGenreState = {
    genres: [],
}

export const setGenresThunk = createAsyncThunk(
    'genreSlice/setGenresThunk',
    async (_, {dispatch}) => {
        try {
            const genres = await genreService.getAll();
            dispatch(setGenres(genres))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenres: (state, action: any) => {
            state.genres = action.payload.genres;
        }
    }
})

const genreReducer = genreSlice.reducer;

export default genreReducer;
export const {setGenres} = genreSlice.actions;