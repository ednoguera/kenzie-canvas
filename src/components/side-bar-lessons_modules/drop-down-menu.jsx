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
    const [lessonsName, setLessonsList] = useState(
        props.lessons.filter(modules => modules.topicName[4] === props.mod)
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

    const handlerClick = (setState, obj) => {
        setState(obj)
    }


    return (
        <StyledMenu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
            {lessonsName.map(module => <SubMenu title={module.topicName}>
                <SubMenu title="Lista de exercicios">
                    {module.issuesList.map(issues =>
                        <MenuItem onClick={handlerClick(props.setState, issues.lessonName)}>
                            {issues.lessonName}
                        </MenuItem>)}
                </SubMenu>
                {
                    module.lessonsList.map(lesson => <MenuItem>{lesson.lessonName}</MenuItem>)
                }
            </SubMenu>)}
        </StyledMenu>
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