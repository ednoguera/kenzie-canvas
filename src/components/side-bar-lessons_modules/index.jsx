import React, { useState } from 'react'
import styled from 'styled-components'
import Sider from './drop-down-menu'
import { lessons } from '../../helper/lesson_array'

const SideBarLessons = (props) => {

    return (
        <SideBar>
            <Sider mod="Õ" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="A" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="B" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="C" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="D" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="E" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="F" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="G" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="H" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
            <Sider mod="I" lessons={lessons} setState={props.setState} setLessonTitle={props.setLessonTitle} />
        </SideBar>
    )
}

export default SideBarLessons

const SideBar = styled.div`
    height: 90%; /* Full-height: remove this if you want "auto" height */
    width: 20%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 70px; /* Stay at the top */
    left: 8%;
    background-color: #f9f9f9; /* Light grey*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

