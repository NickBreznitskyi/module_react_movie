import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {setSearchMovieListThunk} from "../../../store";
import {FoundMovie} from "./FoundMovie";
import styled from "styled-components";

const InputSearch = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();
    const {searchMovieList} = useAppSelector(state => state.movieReducer);
    const page = 1;

    const handleInput = (e: any) => {
        const {value} = e.target;
        setInputValue(value);
        if (value.length > 2) {
            dispatch(setSearchMovieListThunk({value: inputValue, page}))
        }
    }

    return (
        <CustomInput>
            <Input size={'large'} onChange={(e) => handleInput(e)}
                   allowClear={true}/>
            {inputValue &&
                <div className={"foundMovie__list"}>
                    {searchMovieList && searchMovieList.results.map(movie => <FoundMovie key={movie.id}
                                                                                         movie={movie}/>)}
                    {searchMovieList?.results.length === 0 && <div>Nothing to found! Refine your request.</div>}
                    {searchMovieList?.results.length !== 0 && <Link to={`/search/:${inputValue}`} state={{inputValue}}>
                        <div className={"btn__allResults"}>All Results</div>
                    </Link>}
                    {searchMovieList?.results.length === 0 && <Link to={`/movies`}>
                        <div>All Movie</div>
                    </Link>}
                </div>
            }
        </CustomInput>
    );
};

const CustomInput = styled.div`
  width: 500px;
  
  .anticon.ant-input-clear-icon-hidden {
    visibility: visible;
  }

  .foundMovie__list {
    position: absolute;
    background-color: white;
    top: 50px;
    width: 500px;
    height: 470px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 10px;
  }
  
  .btn__allResults {
    text-align: center;
    color: gray;
    font-size: 20px;
  }
`
export {InputSearch};