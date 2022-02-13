import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Pagination} from 'antd';
import styled from "styled-components";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {setMovieListByGenreThunk} from "../../store";
import {MovieCard} from "../MovieCard";

const MovieListByGenre = () => {
    const {movieListByGenre} = useAppSelector(state => state.movieReducer);
    const {isBlackTheme} = useAppSelector(state => state.themeReducer);
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
        <CustomMovieListByGenre isBlackTheme={isBlackTheme}>
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

const CustomMovieListByGenre = styled.div<{isBlackTheme: boolean}>`
  margin-top: 20px;
  
  h2 {
    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  }

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