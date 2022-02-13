import {MovieTypeEnum} from "../enums";
import {setPopularMoviesListThunk, setTopRatedMoviesListThunk, setUpcomingMoviesListThunk} from "../store";

export const handleApiCall = (title: string, dispatch: any, page: number): any => {
    switch (title) {
        case MovieTypeEnum.POPULAR: {
            dispatch(setPopularMoviesListThunk(page))
            return
        }
        case MovieTypeEnum.TOPRATED: {
            dispatch(setTopRatedMoviesListThunk(page))
            return;
        }
        case MovieTypeEnum.UPCOMING: {
            dispatch(setUpcomingMoviesListThunk(page))
            return;
        }
    }
}