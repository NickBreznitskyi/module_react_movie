import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {SliderCarousel} from "./SliderCarousel";

const ContentApp: FC = () => {
    return (
        <div>
            <SliderCarousel/>
            <Outlet/>
        </div>
    );
};

export {ContentApp};