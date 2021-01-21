import React from 'react'
import styled from 'styled-components'

const IframeRender = (props) => {
    return (
        <p>
            <Title>
                <h3>{props.title}</h3>
            </Title>
            <StyledIframe src={props.src} width="100%" height="1536px" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" />
        </p>
    )
}

export default IframeRender

const StyledIframe = styled.iframe`
    width: 100%;
    margin: 2rem auto;
    padding: 0 10% 5% 30%;
    border: none;

    h2 {
        color: red;
    }
`

const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 2rem auto;
    padding: 0 0 0 30.5%;

    h3 {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    }
`