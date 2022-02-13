import React, {FC} from 'react';
import {Layout} from "antd";
import styled from "styled-components";

import {ContentApp} from "../ContentApp";
import {HeaderApp} from "../HeaderApp";

const {Footer, Content} = Layout;


const LayoutApp: FC = () => {
    return (
        <div>
            <CustomLayout className="layout">
                <HeaderApp/>
                <Content style={{padding: '100px 100px 0'}}>
                    <div className="site-layout-content">
                        <ContentApp/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>MovieApp {new Date().getFullYear()} Created by Nick Breznitskyi</Footer>
            </CustomLayout>
        </div>
    );
};

const CustomLayout = styled(Layout)`
  background: none;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__menu_menu-item {
    font-size: large;
  }
`

export {LayoutApp};