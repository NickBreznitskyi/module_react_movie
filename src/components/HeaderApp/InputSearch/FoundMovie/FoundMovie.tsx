import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import {IMovie} from "../../../../interfaces";
import {urls} from "../../../../constants";
import {GenreBadge} from "../../../GenreBadge/GenreBadge";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {setGenresThunk} from "../../../../store";
import { genresFilter } from '../../../../helpers/genresFilter';

interface IProps {
    movie: IMovie
}

const FoundMovie = ({movie}: IProps) => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setGenresThunk())
    }, [])

    return (
        <>
            <Link to={`/movie/${movie.original_title}`} state={movie.id}>
                <CustomFoundMovieCard style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                    <div className={'movie__poster'}>
                        <img src={urls.getImg + movie.poster_path} width={'100%'} alt={'Poster null'}/>
                    </div>
                    <div className={'movie__info'}>
                        <h3>{movie.title}</h3>
                        <h4>{movie.release_date}</h4>
                        <div className={'genre'}>
                            {genresFilter(genres,movie).map(genre => <GenreBadge key={genre.id} genre={genre}/>)}
                        </div>
                    </div>
                </CustomFoundMovieCard>
            </Link>
            <hr/>
        </>
    );
};

const CustomFoundMovieCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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