import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

const Header = (props) => {
    const [buttonState, setButtonState] = useState(false)
    // console.log("Estado do menú hamburguer:", buttonState)

    const handlerClick = () => {
        setButtonState(!buttonState)
        props.setMenuModules(!props.menuModules)
    }


    return (
        <StyledHeader>
            <MenuContainer>
                {buttonState === false ? <StyledButton onClick={handlerClick} setMenuModules={props.setMenuModules} menuModules={props.menuModules} >
                    <Hamburguer />
                </StyledButton> : <StyledButton onClick={handlerClick} setMenuModules={props.setMenuModules} menuModules={props.menuModules} >
                        <CloseButton />
                    </StyledButton>}
            </MenuContainer>
            <TitleContainer>
                <h1>Módulos de Javascript</h1>
            </TitleContainer>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.header`
    background-color: #f9f9f9;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 0;
    padding-left: 10%;
    width: 100%;
    height: 90px;
    border-bottom: 5px solid #5fdbfa;
    display: flex;
    align-items: center;
`
const StyledButton = styled.button`
    border-style: none;
    background-color: rgba(255, 0, 0, 0);;
`

const Hamburguer = styled(MenuOutlined)`
    font-size: 30px;
    color: #05143c;
`

const MenuContainer = styled.div`
    margin: 1rem;
`

const TitleContainer = styled.div`
    margin: 1rem;
    color: #05143c;
    font-size: 15px;
    font-weight: bold;
    padding-top: 15px;
    font-family: 'Montserrat', sans-serif;
`

const CloseButton = styled(CloseOutlined)`
    font-size: 30px;
    color: #05143c;
`