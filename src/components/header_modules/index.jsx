import React, { useState } from 'react'
import {
    StyledHeader,
    MenuContainer,
    StyledMenuButton,
    HeaderTitleContainer,
    Hamburguer,
    CloseButton
} from '../../style/styled-components'

const Header = (props) => {
    const [buttonState, setButtonState] = useState(false)

    const handlerClick = () => {
        setButtonState(!buttonState)
        props.setMenuModules(!props.menuModules)
    }


    return (
        <StyledHeader>
            <MenuContainer>
                {buttonState === false ? <StyledMenuButton onClick={handlerClick} setMenuModules={props.setMenuModules} menuModules={props.menuModules} >
                    <Hamburguer />
                </StyledMenuButton> : <StyledMenuButton onClick={handlerClick} setMenuModules={props.setMenuModules} menuModules={props.menuModules} >
                        <CloseButton />
                    </StyledMenuButton>}
            </MenuContainer>
            <HeaderTitleContainer>
                <h1>Semana do Zero ao JavaScript</h1>
            </HeaderTitleContainer>
        </StyledHeader>
    )
}

export default Header

