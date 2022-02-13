import React, {useEffect, useMemo} from 'react';
import Slider from "react-slick";
import styled from "styled-components";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {setGenresThunk} from "../../../store";
import {MovieTypeEnum} from "../../../enums";
import {handleApiCall} from '../../../helpers';
import { MovieCard } from '../../MovieCard/MovieCard';

interface IProps {
    title: MovieTypeEnum
}

const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
};

const MovieListCarousel = ({title}: IProps) => {
    const dispatch = useAppDispatch();
    const {isBlackTheme} = useAppSelector(state => state.themeReducer);
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
        if (!popularMoviesList?.results.length || !topRatedMoviesList?.results.length || !upcomingMoviesList?.results.length)
            handleApiCall(title, dispatch, page);
    }, [title, dispatch])

    useEffect(() => {
        dispatch(setGenresThunk())
    }, [])

    return (
        <CustomDiv isBlackTheme={isBlackTheme}>
            <h2 style={{fontSize: '26px'}}>{title}</h2>
            {moviesRender}
        </CustomDiv>
    );
};

const CustomDiv = styled.h2<{ isBlackTheme: boolean }>`
  margin-top: 20px;

  h2 {
    font-size: 26px;
    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  }
`
export {MovieListCarousel};