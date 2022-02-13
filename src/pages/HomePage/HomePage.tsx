import React, {FC} from 'react';

import {MovieListCarousel} from "../../components";
import {MovieTypeEnum} from "../../enums";

const HomePage: FC = () => {
    return (
        <div>
            <MovieListCarousel title={MovieTypeEnum.POPULAR}/>
            <MovieListCarousel title={MovieTypeEnum.TOPRATED}/>
            <MovieListCarousel title={MovieTypeEnum.UPCOMING}/>
        </div>
    );
};

export {HomePage};