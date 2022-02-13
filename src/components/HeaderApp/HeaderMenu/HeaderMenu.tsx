import React, {FC} from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import SubMenu from 'antd/lib/menu/SubMenu';
import styled from "styled-components";

import {useAppSelector} from "../../../hooks";

const HeaderMenu: FC = () => {

    const {genres} = useAppSelector(state => state.genreReducer);

    return (
        <>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item className={'header__menu_menu-item'} key={'MOVIE'}>
                    <Link to={'/movies'} style={{color: 'white'}}>MOVIES</Link>
                </Menu.Item>
                <CustomSubMenu title={'GENRES'} key={'Movies map'}>
                    {genres.map(genre => <Link to={`/${genre.name}`} state={{genre}} key={genre.name}>
                        <Menu.Item key={genre.id}>
                            {genre.name}
                        </Menu.Item>
                    </Link>)}
                </CustomSubMenu>
            </Menu>
        </>
    );
};

const CustomSubMenu = styled(SubMenu)`
  color: white;
  font-size: larger;

  #rc-menu-uuid-57536-1-GENRE-popup {
    height: 400px;
  }

  .ant-menu {
    height: 100px;
  }
`

export {HeaderMenu};