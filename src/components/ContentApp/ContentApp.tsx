import React, {FC} from 'react';

import {SliderCarousel} from "./SliderCarousel";
import {Outlet} from "react-router-dom";

const ContentApp: FC = () => {
    return (
        <div>
            <SliderCarousel/>
            <Outlet/>
        </div>
    );
};

export {ContentApp};