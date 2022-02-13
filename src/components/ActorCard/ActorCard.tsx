import React from 'react';
import {Card} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import {urls} from "../../constants";
import styled from "styled-components";

const {Meta} = Card;

interface IProps {
    actor: any;
}

const ActorCard = ({actor}: IProps) => {
    return (
        <div>
            <CustomCard
                hoverable
                cover={<Avatar src={urls.getImg + actor.profile_path}/>}
            >
                <Meta title={`${actor.name}`} description={`In the role ${actor.character}`}/>
            </CustomCard>
        </div>
    );
};

const CustomCard = styled(Card)`
  width: 240px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ant-avatar {
    width: 100%;
    height: 168px;
  }
`

export {ActorCard};