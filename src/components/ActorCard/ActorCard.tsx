import React from 'react';
import {Card} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import styled from "styled-components";

import {urls} from "../../constants";
import {useAppSelector} from "../../hooks";

const {Meta} = Card;

interface IProps {
    actor: any;
}

const ActorCard = ({actor}: IProps) => {
    const {isBlackTheme} = useAppSelector(state => state.themeReducer);
    return (
        <>
            <CustomCard
                isBlackTheme={isBlackTheme}
                hoverable
                cover={<Avatar src={urls.getImg + actor.profile_path}/>}
            >
                <CustomMeta isBlackTheme={isBlackTheme} title={`${actor.name}`}
                            description={`In the role ${actor.character}`}/>
            </CustomCard>
        </>
    );
};

const CustomCard = styled(Card)<{ isBlackTheme: boolean }>`
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({isBlackTheme}) => (isBlackTheme ? "black" : "white")};


  .ant-avatar {
    width: 100%;
    height: 168px;
  }
`

const CustomMeta = styled(Meta)<{ isBlackTheme: boolean }>`
  & div {
    color: ${({isBlackTheme}) => (isBlackTheme ? "white" : "black")};
  }
`

export {ActorCard};