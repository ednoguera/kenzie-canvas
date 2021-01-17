import React, { useState } from 'react'
import styled from 'styled-components'
import ContainerLessons from './container-lessons'
import { lessons } from '../../helper/lesson_array'

const SideBarLessons = () => {

    return (
        <SideBar>
            <ContainerLessons title="01" lessons={lessons} mod="1" />
            <ContainerLessons title="02" lessons={lessons} mod="2" />
            <ContainerLessons title="03" lessons={lessons} mod="3" />
            <ContainerLessons title="04" lessons={lessons} mod="4" />
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

