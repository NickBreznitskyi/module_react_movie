import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Image} from "antd";
import Slider from "react-slick";
import YouTube from "react-youtube";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {
    setMovieCreditsThunk,
    setMovieDetailsThunk,
    setMovieImagesThunk,
    setMovieVideosThunk
} from "../../store";
import {urls} from "../../constants";
import {ActorCard} from "../ActorCard";
// @ts-ignore
import imdbIcon from "../../resources/images/imdbIcon.png";

const MovieInfo = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {movieDetails, movieImages, movieVideos, movieCredits} = useAppSelector(state => state.movieReducer);
    const {state}: any = location;
    const trailer = movieVideos?.results?.filter(video => video.type === 'Trailer' && video.official)[0];
    const directors = movieCredits?.crew?.filter(crew => crew.job === 'Director');

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };

    const options = {
        height: '500',
        width: '100%',
        playerVars: {
            playsinline: 1,
        },
    } as const

    useEffect(() => {
        dispatch(setMovieDetailsThunk(state))
        dispatch(setMovieImagesThunk(state))
        dispatch(setMovieVideosThunk(state))
        dispatch(setMovieCreditsThunk(state))
    }, [state])
    return (
        <div>
            <h2>{movieDetails?.title}</h2>
            <hr/>
            <div style={{display: "flex"}}>
                <div style={{width: '30%'}}>
                    <img src={`${urls.getImg}/${movieDetails?.poster_path}`} height={'500px'} alt={"Poster null"}/>
                    <div>
                        <p>Release Date: {movieDetails?.release_date}</p>
                        <hr/>
                        <p>Country: {movieDetails?.production_countries?.map(value => `${value.name} `)}</p>
                        <hr/>
                        <p>Genres: {movieDetails?.genres?.map(value => `${value.name}, `)}</p>
                        <hr/>
                        <p>Director: {directors?.map(director => `${director.name}`)}</p>
                        <hr/>
                        <p>Actors: {movieCredits?.cast?.map((value, index: number) => {
                            if (index < 5) {
                                return `${value.name}, `
                            }
                        })}</p>
                        <hr/>
                        <p>Runtime: {movieDetails?.runtime} minute</p>
                        <hr/>
                        <img src={imdbIcon} alt={"IMDB"} width={40}/>
                        <span>{`${movieDetails?.vote_average}/${movieDetails?.vote_count}`}</span>
                    </div>
                </div>
                <div style={{width: '70%', padding: 30}}>
                    <div>
                        <h2>Trailer</h2>
                        <YouTube videoId={trailer?.key} opts={options}/>
                        <hr/>
                    </div>
                    <div>
                        <h2>Backdrops</h2>
                        <Slider {...settings}>
                            {movieImages?.backdrops.map((img: any) => <div key={img.file_path}><Image
                                src={urls.getImg + img.file_path}/>
                            </div>)}
                        </Slider>
                        <hr/>
                    </div>
                    <div>
                        <h2>What is the movie "{movieDetails?.title}" about?</h2>
                        <p>{movieDetails?.overview}</p>
                        <hr/>
                    </div>
                    <div>
                        <h2>Actors</h2>
                        <Slider {...settings}>
                            {movieCredits?.cast.map((actor: any) => <ActorCard key={actor.id} actor={actor}/>)}
                        </Slider>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export {MovieInfo};