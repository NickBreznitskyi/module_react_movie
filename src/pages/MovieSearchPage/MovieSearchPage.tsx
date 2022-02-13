import React from 'react';
import {useLocation} from 'react-router-dom';
import {Pagination} from 'antd';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {MovieCard} from "../../components";
import {setSearchMovieListThunk} from "../../store";

const MovieSearchPage = () => {
    const {searchMovieList} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {state}: any = useLocation();
    const value = state.inputValue;

    const handlePageClick = (page: number) => {
        dispatch(setSearchMovieListThunk({value, page}))
        window.scrollTo(0, 550)
    }

    return (
        <div>
            <h2>Results: {value}</h2>
            <div style={{display: "flex", flexWrap: "wrap", gap: '60px', justifyContent: "center"}}>
                {searchMovieList?.results.map(value => <MovieCard movie={value}/>)}
            </div>
            <div style={{display: "flex", marginTop: '30px', justifyContent: 'center'}}>
                <Pagination defaultCurrent={1} total={searchMovieList?.total_results} showSizeChanger={false}
                            onChange={(page) => handlePageClick(page)}/>
            </div>
        </div>
    );
};

export {MovieSearchPage};