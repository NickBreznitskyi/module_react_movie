import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {Avatar, Layout, Switch} from "antd";
import {SearchOutlined, UserOutlined} from "@ant-design/icons";
import styled from "styled-components";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {setTheme} from "../../store/slices/theme.slice";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";
import {InputSearch} from "./InputSearch/InputSearch";

// @ts-ignore
import logo from "../../resources/images/logo.png";


const {Header} = Layout;

const HeaderApp: FC = () => {

    const [onClicked, setOnClicked] = useState(false);
    const {isBlackTheme} = useAppSelector((state) => state.themeReducer);
    const dispatch = useAppDispatch();

    const click = () => {
        if (!onClicked) {
            setOnClicked(true)
        } else {
            setOnClicked(false)
        }
    }

    const onClick = () => {
        dispatch(setTheme(!isBlackTheme));
    }

    return (
        <>
            <CustomHeader className={'header'}>
                <div>
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt="Logo" width={60}/>
                    </Link>
                </div>
                <HeaderMenu/>
                <div className={"header__item"}>
                    {onClicked && <InputSearch/>}
                    <SearchOutlined className={"searchOutlined"} onClick={() => click()}/>
                    <Switch onClick={onClick}/>
                    <Avatar size='large' icon={<UserOutlined/>}/>
                </div>
            </CustomHeader>
        </>
    );
};

const CustomHeader = styled(Header)`
  position: fixed;
  z-index: 999999;
  width: 100%;

  .header__item {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .searchOutlined {
    font-size: 20px;
    color: white;
  }
`

export {HeaderApp};