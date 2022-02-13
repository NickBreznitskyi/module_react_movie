import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
    isBlackTheme: boolean;
}

const GenreBadge = ({genre, isBlackTheme}: IProps) => {
    return (
        <>
            <Link to={`/${genre.name}`} state={{genre}}>
                <CustomGenre isBlackTheme={isBlackTheme}>
                    {genre.name}
                </CustomGenre>
            </Link>
        </>
    );
};

const CustomGenre = styled.div<{ isBlackTheme: boolean }>`
  border: 1px solid ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  padding: 5px;
  border-radius: 10px;

  :hover {
    background-color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "dodgerblue")};
    color: ${({isBlackTheme}) => (isBlackTheme ? "black" : "white")};
  }
`;
export {GenreBadge};