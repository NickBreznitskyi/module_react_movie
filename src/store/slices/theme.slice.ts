import {createSlice} from "@reduxjs/toolkit";

interface IThemeState {
    isBlackTheme: boolean;
}

const initialState: IThemeState = {
    isBlackTheme: false,
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state, action: any) => {
            state.isBlackTheme = action.payload;
        }
    }
})

const themeReducer = themeSlice.reducer;

export default themeReducer;
export const {setTheme} = themeSlice.actions;