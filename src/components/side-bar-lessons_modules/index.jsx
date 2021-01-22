import React, { useState } from 'react'
import styled from 'styled-components'
import Sider from './drop-down-menu'
import { lessons } from '../../helper/lesson_array'

const SideBarLessons = (props) => {

    return (
        <SideBar>
            <Sider mod="1" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="2" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="3" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="4" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="5" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="6" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="7" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="8" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="9" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
        </SideBar>
    )
}

export default SideBarLessons

const SideBar = styled.div`
    height: 90%; /* Full-height: remove this if you want "auto" height */
    width: 20%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 89.5px; /* Stay at the top */
    left: 8%;
    background-color: #f9f9f9; /* Light grey*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

