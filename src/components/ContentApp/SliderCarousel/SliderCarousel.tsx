import React, {FC, useEffect} from 'react';
import {Carousel} from 'antd';


import {useAppDispatch, useAppSelector} from "../../../hooks";
import {setPopularMoviesListThunk} from "../../../store";
import {SliderCarouselItem} from "./SliderCarouselItem";

const SliderCarousel: FC = () => {
    const {popularMoviesList} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const page = 1

    useEffect(() => {
        dispatch(setPopularMoviesListThunk(page))
    }, [])

    return (
        <div>
            <Carousel autoplay effect={"fade"} autoplaySpeed={5000} style={{width: '1600'}} dots={false}>
                {popularMoviesList?.results.map(value => <SliderCarouselItem key={value.id} movie={value}/>)}
            </Carousel>
        </div>
    );
};

export {SliderCarousel};