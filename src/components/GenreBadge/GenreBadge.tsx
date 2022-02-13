import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

import {IGenre} from "../../interfaces";

interface IProps {
    genre: IGenre;
}

const GenreBadge = ({genre}: IProps) => {
    return (
        <>
            <Link to={`/${genre.name}`} state={{genre}}>
                <CustomGenre>
                    {genre.name}
                </CustomGenre>
            </Link>
        </>
    );
};

const CustomGenre = styled.div`
  border: 1px solid;
  color: black;
  padding: 5px;
  border-radius: 10px;
  
  :hover {
    background-color: dodgerblue;
    color: white;
  }
`
export {GenreBadge};