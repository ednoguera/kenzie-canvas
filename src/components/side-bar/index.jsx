import React from 'react'
import styled from 'styled-components'
import banner from '../../assets/img/[LOGO].png'

const SideBar = () => {
    return (
        <SideNav>
            <TitleContainer>
                <p>Bem-vindo(a) à plataforma de conteúdo da</p>
                <h1>Kenzie Academy Brasil</h1>
            </TitleContainer>
            <Image src={banner} />
            <TextContainer>
                <p>
                    Se você chegou até aqui, é porquê nos interessamos pelo seu
                    perfil. Agora, queremos ver um pouco mais dos seus
                    conhecimentos técnicos.
                </p>
                <p>
                    Mas fique tranquilo(a), para realizar os testes não é
                    necessário conhecimento prévio em programação, tudo bem?
                </p>
            </TextContainer>
        </SideNav>
    )
}

export default SideBar


const SideNav = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 35%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #05143c; /* Blue */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    height: 25vmin;
    pointer-events: none;

`

const TextContainer = styled.span`
    width: 70%;
    color: white;
    margin: 2.5rem;
    paddin-top: 1.5rem;
    font-size: 17px;
    text-align: left;
`

const TitleContainer = styled.span`
    width: 50%;
    color: white;
    text-align: center;
    font-size: 17px;

    h1 {
        font-size: 22px;
        color: white;
    }
`

