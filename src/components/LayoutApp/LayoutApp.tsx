import React, {FC} from 'react';
import {Layout} from "antd";
import styled from "styled-components";

import {ContentApp} from "../ContentApp";
import {HeaderApp} from "../HeaderApp";
import {useAppSelector} from "../../hooks";

const {Footer, Content} = Layout;

const LayoutApp: FC = () => {

    const {isBlackTheme} = useAppSelector((state) => state.themeReducer);

    return (
        <div>
            <CustomLayout isBlackTheme={isBlackTheme} className="layout">
                <HeaderApp/>
                <Content style={{padding: '100px 100px 0'}}>
                    <div className="site-layout-content">
                        <ContentApp/>
                    </div>
                </Content>
                <CustomFooter style={{textAlign: 'center'}}>MovieApp {new Date().getFullYear()} Created by Nick
                    Breznitskyi</CustomFooter>
            </CustomLayout>
        </div>
    );
};

const CustomLayout = styled(Layout)<{ isBlackTheme: boolean }>`
  background: ${props => props.isBlackTheme ? 'black' : 'white'};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__menu_menu-item {
    font-size: large;
  }
`
const CustomFooter = styled(Footer)`
  background: #001529;
  color: white;
  margin-top: 50px;
`

export {LayoutApp};