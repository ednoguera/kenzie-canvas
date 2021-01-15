import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo-kenzie/logo-kenzie-01.png'

const BannerLogin = () => {
    return (
        <Figure>
            <Image src={Logo} />
        </Figure>
    )
}

export default BannerLogin


const Image = styled.img`
    height: 32vmin;
    pointer-events: none;
`

const Figure = styled.figure`
    padding: 12% 0 0 40%;
`