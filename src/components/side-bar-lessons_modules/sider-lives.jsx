import React from 'react'
import { SiderLivesContainer } from '../../style/styled-components'

const SiderLives = (props) => {
    return (
        <SiderLivesContainer onClick={props.renderLives}>
            <h2>{props.title}</h2>
        </SiderLivesContainer>
    )
}

export default SiderLives