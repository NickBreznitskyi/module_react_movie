import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovieList} from "../../interfaces";
import {movieService} from "../../services";
import {IMovieDetails} from "../../interfaces";
import {IImage} from "../../interfaces";
import {IVideo} from "../../interfaces";
import {ICredit} from "../../interfaces";

interface IMovieState {
    popularMoviesList: IMovieList | null;
    topRatedMoviesList: IMovieList | null;
    upcomingMoviesList: IMovieList | null;
    searchMovieList: IMovieList | null;
    movieDetails: IMovieDetails | null;
    movieImages: IImage | null;
    movieVideos: IVideo | null;
    movieCredits: ICredit | null;
    movieListByGenre: IMovieList | null;
}

const initialState: IMovieState = {
    popularMoviesList: null,
    topRatedMoviesList: null,
    upcomingMoviesList: null,
    searchMovieList: null,
    movieDetails: null,
    movieImages: null,
    movieVideos: null,
    movieCredits: null,
    movieListByGenre: null,
}

export const setPopularMoviesListThunk = createAsyncThunk(
    'movieSlice/setPopularMoviesListThunk',
    async (page: number = 1, {dispatch}) => {
        try {
            const movieList = await movieService.getPopular(page);
            dispatch(setPopularMoviesList({movieList}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setTopRatedMoviesListThunk = createAsyncThunk(
    'movieSlice/setTopRatedMoviesListThunk',
    async (page: number, {dispatch}) => {
        try {
            const movieList = await movieService.getTopRated(page);
            dispatch(setTopRatedMoviesList({movieList}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setUpcomingMoviesListThunk = createAsyncThunk(
    'movieSlice/setUpcomingMoviesListThunk',
    async (page: number, {dispatch}) => {
        try {
            const movieList = await movieService.getUpcoming(page);
            dispatch(setUpcomingMoviesList({movieList}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setSearchMovieListThunk = createAsyncThunk(
    'movieSlice/setSearchMovieListThunk',
    async ({value, page}: any, {dispatch}) => {
        try {
            const movieList = await movieService.getSearch(value, page);
            dispatch(setSearchMovieList({movieList}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setMovieDetailsThunk = createAsyncThunk(
    'movieSlice/setMovieDetailsThunk',
    async (id: any, {dispatch}) => {
        try {
            const details = await movieService.getDetails(id);
            dispatch(setMovieDetails({details}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setMovieImagesThunk = createAsyncThunk(
    'movieSlice/setMovieImagesThunk',
    async (id: any, {dispatch}) => {
        try {
            const images = await movieService.getImages(id);
            dispatch(setMovieImages({images}))
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setMovieVideosThunk = createAsyncThunk(
    'movieSlice/setMovieVideosThunk',
    async (id: any, {dispatch}) => {
        try {
            const videos = await movieService.getVideos(id);
            dispatch(setMovieVideos({videos}));
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setMovieCreditsThunk = createAsyncThunk(
    'movieSlice/setMovieCreditsThunk',
    async (id: any, {dispatch}) => {
        try {
            const credits = await movieService.getCredits(id);
            dispatch(setMovieCredits({credits}));
        } catch (e: any) {
            console.log(e.message);
        }
    }
)

export const setMovieListByGenreThunk = createAsyncThunk(
    'movieSlice/setMovieListByGenreThunk',
    async ({page, id}: any, {dispatch}) => {
        try {
            const movieList = await movieService.getListByGenre(page, id);
            dispatch(setMovieListByGenre({movieList}))
        } catch (e: any) {
            console.log(e.message);
        }

    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setPopularMoviesList: (state, action: PayloadAction<{ movieList: IMovieList }>) => {
            state.popularMoviesList = action.payload.movieList
        },
        setTopRatedMoviesList: (state, action: PayloadAction<{ movieList: IMovieList }>) => {
            state.topRatedMoviesList = action.payload.movieList
        },
        setUpcomingMoviesList: (state, action: PayloadAction<{ movieList: IMovieList }>) => {
            state.upcomingMoviesList = action.payload.movieList
        },
        setSearchMovieList: (state, action: PayloadAction<{ movieList: IMovieList }>) => {
            state.searchMovieList = action.payload.movieList;
        },
        setMovieDetails: (state, action: PayloadAction<{ details: IMovieDetails }>) => {
            state.movieDetails = action.payload.details
        },
        setMovieImages: (state, action: PayloadAction<{ images: IImage }>) => {
            state.movieImages = action.payload.images
        },
        setMovieVideos: (state, action: PayloadAction<{ videos: IVideo }>) => {
            state.movieVideos = action.payload.videos
        },
        setMovieCredits: (state, action: PayloadAction<{ credits: ICredit }>) => {
            state.movieCredits = action.payload.credits
        },
        setMovieListByGenre: (state, action: PayloadAction<{ movieList: IMovieList }>) => {
            state.movieListByGenre = action.payload.movieList
        }
    }
})

const movieReducer = movieSlice.reducer;

export default movieReducer;
export const {
    setPopularMoviesList,
    setTopRatedMoviesList,
    setUpcomingMoviesList,
    setSearchMovieList,
    setMovieDetails,
    setMovieImages,
    setMovieVideos,
    setMovieCredits,
    setMovieListByGenre
} = movieSlice.actions;