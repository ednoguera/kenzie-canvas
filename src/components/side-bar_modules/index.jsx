import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import banner from '../../assets/logo-kenzie/logo-kenzie-05.png'
import styled from 'styled-components'

const SideBarModules = (props) => {
    const history = useHistory()



    return (
        <SideNav>
            <Image src={banner} />
        </SideNav>
    )
}

export default SideBarModules


const SideNav = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 8%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #05143c; /* Blue */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const Button = styled.button`
    background-color: #f9f9f9;
    height: 40px;
    width: 80%;
    border: none;
    border-radius: 10px;
    font-weight: bold;
`

const Image = styled.img`
    height: 8vmin;
    pointer-events: none;

`