import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

import {IMovie} from "../../../../interfaces";
import {urls} from "../../../../constants";


const SliderCarouselItem: FC<{ movie: IMovie }> = ({movie}) => {
    const {backdrop_path, title, id} = movie;

    return (
        <CustomCarouselItem>
            <Link to={`/movie/${title}`} state={id}>
                <div style={{
                    backgroundImage: `url(${urls.getImg + backdrop_path})`,
                }}>
                </div>
            </Link>
        </CustomCarouselItem>
    );
};

const CustomCarouselItem = styled.div`
  height: 500px;
  color: #fff;
  line-height: 160px;
  text-align: center;

  div {
    height: 500px;
    background-position: 50% 25%;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export {SliderCarouselItem};