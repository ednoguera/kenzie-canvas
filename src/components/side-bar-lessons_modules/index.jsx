import React, { useState } from 'react'
import styled from 'styled-components'
import Sider from './drop-down-menu'
import { lessons } from '../../helper/lesson_array'

const SideBarLessons = () => {

    return (
        <SideBar>
            <Sider mod="1" lessons={lessons} title="Módulo 01" />
            <Sider mod="2" lessons={lessons} title="Módulo 02" />
            <Sider mod="3" lessons={lessons} title="Módulo 03" />
            <Sider mod="4" lessons={lessons} title="Módulo 04" />
        </SideBar>
    )
}

export default SideBarLessons

const SideBar = styled.div`
    height: 90%; /* Full-height: remove this if you want "auto" height */
    width: 20%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z - index: 1; /* Stay on top */
    top: 125px; /* Stay at the top */
    left: 8%;
    background-color: #f9f9f9; /* Light grey*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

