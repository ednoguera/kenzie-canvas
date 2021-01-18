import React, { useState } from 'react'
import { Menu } from 'antd';
import styled from 'styled-components'

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['1', '2', '3', '4'];

const Sider = (props) => {
    const [openKeys, setOpenKeys] = useState(['1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        console.log(keys)

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    // const onClickList = (ref) => {
    //     props.setSelectLesson(ref)
    //     console.log(ref)
    // }

    return (
        <StyledMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
            <SubMenu key={props.mod} title={props.title}>
                {props.lessons.filter(module => module.mod === props.mod).map((data, key) => <MenuItem key={key}>{data.ref}</MenuItem>)}
            </SubMenu>
        </StyledMenu>
    );
};

export default Sider

const StyledMenu = styled(Menu)`
    background-color: #f9f9f9;
    border: none;
    font-size: 22px;
`

const MenuItem = styled(Menu.Item)`
    background-color: none;
`