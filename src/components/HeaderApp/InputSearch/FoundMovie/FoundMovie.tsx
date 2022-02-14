import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import {IMovie} from "../../../../interfaces";
import {urls} from "../../../../constants";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {setGenresThunk} from "../../../../store";
import {genresFilter} from '../../../../helpers';
import {GenreBadge} from "../../../GenreBadge/GenreBadge";

//@ts-ignore
import CameraImg from "../../../../resources/images/camera.png";

interface IProps {
    movie: IMovie;
}

const FoundMovie = ({movie}: IProps) => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const {isBlackTheme} = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setGenresThunk())
    }, [])

    return (
        <>
            <Link to={`/movie/${movie.original_title}`} state={movie.id}>
                <CustomFoundMovieCard isBlackTheme={isBlackTheme}>
                    <div className={'movie__poster'}>
                        <img src={!movie.poster_path ? CameraImg : urls.getImg + movie.poster_path} width={'100%'}
                             alt={'Poster null'}/>
                    </div>
                    <div className={'movie__info'}>
                        <h3>{movie.title}</h3>
                        <h4>{movie.release_date}</h4>
                        <div className={'genre'}>
                            {genresFilter(genres, movie).map(genre => <GenreBadge isBlackTheme={isBlackTheme}
                                                                                  key={genre.id} genre={genre}/>)}
                        </div>
                    </div>
                </CustomFoundMovieCard>
            </Link>
            <hr/>
        </>
    );
};

const CustomFoundMovieCard = styled.div<{ isBlackTheme: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h3, h4 {
    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  }

  .movie__poster {
    width: 15%;
  }

  .movie__info {
    width: 300px;
    line-height: 110%;
  }

  .genre {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 5px;
  }

`
export {FoundMovie};