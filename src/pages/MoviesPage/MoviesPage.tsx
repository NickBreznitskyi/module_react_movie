import React, {FC, SetStateAction, useState} from 'react';
import {Select} from 'antd';

import {MoviesLists} from "../../components";
import {MovieTypeEnum} from "../../enums";
import styled from "styled-components";

const {Option} = Select;

const MoviesPage: FC = () => {
    const [option, setOption] = useState(MovieTypeEnum.POPULAR);

    const handleChange = (value: SetStateAction<any>) => {
        setOption(value)
    }

    return (
        <div>
            <CustomDiv>
                <h2>Movies</h2>
                <Select defaultValue={MovieTypeEnum.POPULAR} className={"select"}
                        onChange={handleChange}>
                    <Option value={MovieTypeEnum.POPULAR}>
                        Popular
                    </Option>
                    <Option value={MovieTypeEnum.TOPRATED}>
                        Top Rated
                    </Option>
                    <Option value={MovieTypeEnum.UPCOMING}>
                        Upcoming
                    </Option>

                </Select>
            </CustomDiv>
            <MoviesLists option={option}/>
        </div>
    );
};

const CustomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  
  .select {
    width: 170px;
    font-size: 20px;
  }
`

export {MoviesPage};