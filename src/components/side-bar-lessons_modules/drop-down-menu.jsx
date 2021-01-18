import React, { useState } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components'

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['1', '2', '3', '4'];

const Sider = (props) => {
    const [openKeys, setOpenKeys] = useState(['1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <StyledMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
            <SubMenu key={props.mod} icon={<MailOutlined />} title={props.title}>
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