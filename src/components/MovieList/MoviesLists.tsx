import React, {useEffect, useMemo} from 'react';
import {Pagination} from "antd";
import styled from "styled-components";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {
    setPopularMoviesListThunk,
    setTopRatedMoviesListThunk,
    setUpcomingMoviesListThunk
} from "../../store";
import {MovieTypeEnum} from "../../enums";
import {MovieCard} from "../MovieCard/MovieCard";


interface IProps {
    option: string
}

const page = 1;

const MoviesLists = ({option}: IProps) => {

    const {popularMoviesList, topRatedMoviesList, upcomingMoviesList} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleApiCall = () => {
            switch (option) {
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
    }, [option, dispatch])

    const moviesRender = useMemo(() => {
        switch (option) {
            case MovieTypeEnum.POPULAR: {
                const handlePageClick = (page: number) => {
                    dispatch(setPopularMoviesListThunk(page))
                    window.scrollTo(0, 550)
                }
                return (
                    <CustomMovieList>
                        <div className={"movieList"}>
                            {popularMoviesList?.results.map(value => <MovieCard key={value.title} movie={value}/>)}
                        </div>
                        <div className={"pagination"}>
                            <Pagination total={popularMoviesList?.total_results} showSizeChanger={false}
                                        onChange={(page) => handlePageClick(page)}/>
                        </div>
                    </CustomMovieList>
                );
            }
            case MovieTypeEnum.TOPRATED: {
                const handlePageClick = (page: number) => {
                    dispatch(setTopRatedMoviesListThunk(page))
                    window.scrollTo(0, 550)
                }
                return (
                    <CustomMovieList>
                        <div className={"movieList"}>
                            {topRatedMoviesList?.results.map(value => <MovieCard key={value.title} movie={value}/>)}
                        </div>
                        <div className={"pagination"}>
                            <Pagination total={topRatedMoviesList?.total_results} showSizeChanger={false}
                                        onChange={(page) => handlePageClick(page)}/>
                        </div>
                    </CustomMovieList>
                );
            }
            case MovieTypeEnum.UPCOMING: {
                const handlePageClick = (page: number) => {
                    dispatch(setUpcomingMoviesListThunk(page))
                    window.scrollTo(0, 550)
                }
                return (
                    <CustomMovieList>
                        <div className={"movieList"}>
                            {upcomingMoviesList?.results.map(value => <MovieCard key={value.title} movie={value}/>)}
                        </div>
                        <div className={"pagination"}>
                            <Pagination total={upcomingMoviesList?.total_results} showSizeChanger={false}
                                        onChange={(page) => handlePageClick(page)}/>
                        </div>
                    </CustomMovieList>
                );
            }
        }
    }, [option, popularMoviesList, topRatedMoviesList, upcomingMoviesList]);

    return (
        <div>
            {moviesRender}
        </div>
    );
};

const CustomMovieList = styled.div`
  .movieList {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    justify-content: center;
  }

  .pagination {
    display: flex;
    margin-top: 30px;
    justify-content: center;
  }
`

export {MoviesLists};