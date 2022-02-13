import React, {useEffect, useMemo} from 'react';
import Slider from "react-slick";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {
    setGenresThunk,
    setPopularMoviesListThunk,
    setTopRatedMoviesListThunk,
    setUpcomingMoviesListThunk
} from "../../../store";
import {MovieTypeEnum} from "../../../enums";
import {MovieCard} from "../../MovieCard";

interface IProps {
    title: MovieTypeEnum
}

const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
};

const MovieListCarousel = ({title}: IProps) => {
    const dispatch = useAppDispatch();
    const {popularMoviesList, topRatedMoviesList, upcomingMoviesList} = useAppSelector(state => state.movieReducer);
    const page = 1;

    const moviesRender = useMemo(() => {
        switch (title) {
            case MovieTypeEnum.POPULAR: {
                return (
                    <Slider {...settings}>
                        {popularMoviesList?.results.length &&
                            popularMoviesList?.results.map((movie: any) => <MovieCard key={movie.id} movie={movie}/>)}
                    </Slider>
                );
            }
            case MovieTypeEnum.TOPRATED: {
                return (
                    <Slider {...settings}>
                        {topRatedMoviesList?.results.length &&
                            topRatedMoviesList?.results.map((movie: any) => <MovieCard key={movie.id} movie={movie}/>)}
                    </Slider>
                );
            }
            case MovieTypeEnum.UPCOMING: {
                return (
                    <Slider {...settings}>
                        {upcomingMoviesList?.results.length &&
                            upcomingMoviesList?.results.map((movie: any) => <MovieCard key={movie.id} movie={movie}/>)}
                    </Slider>
                );
            }
        }
    }, [title, popularMoviesList, topRatedMoviesList, upcomingMoviesList]);

    useEffect(() => {
        const handleApiCall = () => {
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
        if (!popularMoviesList?.results.length || !topRatedMoviesList?.results.length || !upcomingMoviesList?.results.length)
            handleApiCall();
    }, [title, dispatch])

    useEffect(() => {
        dispatch(setGenresThunk())
    }, [])

    return (
        <div>
            <h2 style={{fontSize: '26px'}}>{title}</h2>
            {moviesRender}
        </div>
    );
};

export {MovieListCarousel};