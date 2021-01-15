import React from 'react'
import banner from '../../assets/logo-kenzie/logo-kenzie-05.png'
import styled from 'styled-components'

const SideBarModules = () => {
    return (
        <SideNav>
            <Image src={banner} />
        </SideNav>
    )
}

export default SideBarModules


const SideNav = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 10%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #05143c; /* Blue */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    height: 8vmin;
    pointer-events: none;

`