import React, { useState } from 'react'
import { Menu } from 'antd';
import styled from 'styled-components'
import { MenuFoldOutlined } from '@ant-design/icons';
import parse from 'html-react-parser'

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['1', '2', '3', '4'];

const Sider = (props) => {
    const [openKeys, setOpenKeys] = useState(['1']);
    const [lessonsList, setLessonsList] = useState(
        props.lessons.filter(modules => modules.topicName[7] === props.mod)
    )


    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        // console.log(keys)

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <StyledMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
            {lessonsList.map((moduleName, key) => <SubMenu key={key} title={moduleName.topicName}>
                {moduleName.lessonsList.map(lessons => <MenuItem onClick={() => { props.setState(lessons.iframeUrl); props.setLessonTitle(lessons.lessonName) }}>{lessons.lessonName}</MenuItem>)}
                {moduleName.issuesList.map(issues => <MenuItem onClick={() => { props.setState(issues.iframeUrl); props.setLessonTitle(issues.lessonName) }}>{issues.lessonName}</MenuItem>)}
            </SubMenu>)}
        </StyledMenu >
    );
};

export default Sider

const StyledMenu = styled(Menu)`
    background-color: #f9f9f9;
    border: none;
    font-size: 16px;
    font-weight: bold;
`

const MenuItem = styled(Menu.Item)`
    background-color: none;
`