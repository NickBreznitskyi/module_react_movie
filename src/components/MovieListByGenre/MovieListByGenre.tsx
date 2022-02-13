import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Pagination} from 'antd';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {setMovieListByGenreThunk} from "../../store";
import {MovieCard} from "../MovieCard";
import styled from "styled-components";

const MovieListByGenre = () => {
    const {movieListByGenre} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {state}: any = useLocation();
    const {id, name} = state.genre;

    useEffect(() => {
        dispatch(setMovieListByGenreThunk({page: 1, id}))
    }, [id])

    const handlePageClick = (page: number) => {
        dispatch(setMovieListByGenreThunk({page, id}))
        window.scrollTo(0, 520)
    }
    return (
        <CustomMovieListByGenre>
            <h2>Results: {name}</h2>
            <div className={"movieList"}>
                {movieListByGenre?.results.map(value => <MovieCard key={value.id} movie={value}/>)}
            </div>
            <div className={"pagination"}>
                <Pagination defaultCurrent={1} total={movieListByGenre?.total_results} showSizeChanger={false}
                            onChange={(page) => handlePageClick(page)}/>
            </div>
        </CustomMovieListByGenre>
    );
};

const CustomMovieListByGenre = styled.div`
  margin-top: 20px;

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

export {MovieListByGenre};