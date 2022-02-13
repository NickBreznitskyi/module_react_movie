import React from 'react';
import {Link} from "react-router-dom";
import {Card, Rate, Tooltip} from 'antd';
import styled from "styled-components";

import {urls} from "../../constants";
import {IMovie} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import { GenreBadge } from '../GenreBadge/GenreBadge';
import {genresFilter} from '../../helpers';

// @ts-ignore
import imdbIcon from "../../resources/images/imdbIcon.png";

const {Meta} = Card;

interface IProps {
    movie: IMovie
}

const MovieCard = ({movie}: IProps) => {
    const {isBlackTheme} = useAppSelector((state) => state.themeReducer);
    const {genres} = useAppSelector(state => state.genreReducer);


    return (
        <Tooltip title={movie.overview} placement={"bottom"} overlayInnerStyle={{color: isBlackTheme ? 'white' : 'black'}}
                 color={isBlackTheme ? 'black' : 'white'}
                 key={'white'}>
            <div style={{cursor: "pointer"}}>
                <Link to={`/movie/${movie.original_title}`} state={movie.id}>
                    <CustomCard
                        isBlackTheme={isBlackTheme}
                        hoverable
                        cover={<img alt="poster" src={urls.getImg + movie.poster_path}/>}
                    >
                        <CustomMeta
                            isBlackTheme={isBlackTheme}
                            title={movie.title}
                            description={`${movie.release_date}`}
                        />
                        <div className={'genre'}>
                            {genresFilter(genres, movie).map(genre => <GenreBadge isBlackTheme={isBlackTheme}
                                                                                  key={genre.id} genre={genre}/>)}
                        </div>
                        <Rate defaultValue={movie.vote_average / 2}/>
                        <div className={"imdb"}>
                            <img src={imdbIcon} width={"20%"} alt={"IMDB"}/>
                            <span>{`${movie.vote_average}/${movie.vote_count}`}</span>
                        </div>
                    </CustomCard>
                </Link>
            </div>
        </Tooltip>
    );
};

const CustomMeta = styled(Meta)<{ isBlackTheme: boolean }>`
  & div {
    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  }
`;

const CustomCard = styled(Card)<{ isBlackTheme: boolean }>`
  background: ${({isBlackTheme}) => (isBlackTheme ? "black" : "white")};
  position: relative;
  width: 240px;
  height: 600px;

  .genre {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 5px;
  }

  .imdb {
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  }
`;
export {MovieCard};