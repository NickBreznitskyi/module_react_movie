import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {Input} from 'antd';
import styled from "styled-components";

import {useAppDispatch, useAppSelector} from "../../../hooks";
import {setSearchMovieListThunk} from "../../../store";
import {FoundMovie} from "./FoundMovie";

function useOutsideAlerter(ref: any, setInputValue: any): any {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setInputValue()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}


const InputSearch = () => {

    const [inputValue, setInputValue] = useState<any>('');
    const dispatch = useAppDispatch();
    const {searchMovieList} = useAppSelector(state => state.movieReducer);
    const {isBlackTheme} = useAppSelector(state => state.themeReducer);
    const page = 1;
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setInputValue(null));


    const handleInput = (e: any) => {
        const {value} = e.target;
        setInputValue(value);
        if (value.length > 2) {
            dispatch(setSearchMovieListThunk({value: inputValue, page}))
        }
    }

    const click = () => {
        setInputValue('')
    }

    return (
        <CustomInput isBlackTheme={isBlackTheme}>
            <Input size={'large'} onChange={(e) => handleInput(e)}
                   allowClear={true} value={inputValue}/>
            {inputValue &&
                <div className={"foundMovie__list"} onClick={click} ref={wrapperRef}>
                    {searchMovieList && searchMovieList.results.map(movie => <FoundMovie key={movie.id}
                                                                                         movie={movie}/>)}
                    {searchMovieList?.results.length === 0 &&
                        <div>Nothing to found! Refine your request. <hr/></div>}
                    {searchMovieList?.results.length !== 0 &&
                        <Link to={`/search/:${inputValue}`} state={{inputValue}}>
                            <div className={"btn__all"}>All Results</div>
                        </Link>}
                    {searchMovieList?.results.length === 0 && <Link to={`/movies`}>
                        <div className={"btn__all"}>All Movie</div>
                    </Link>}
                </div>
            }
        </CustomInput>
    );
};

const CustomInput = styled.div<{ isBlackTheme: boolean }>`
  width: 500px;

  .anticon.ant-input-clear-icon-hidden {
    visibility: visible;
  }

  .foundMovie__list {
    position: absolute;
    background: ${({isBlackTheme}) => (isBlackTheme ? "black" : "white")};
    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
    top: 50px;
    width: 500px;
    max-height: 470px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 10px;
  }

  .btn__all {
    text-align: center;
    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
    font-size: 20px;
  }
`
export {InputSearch};