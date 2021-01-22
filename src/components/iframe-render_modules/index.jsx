import React from 'react'
import styled from 'styled-components'

const IframeRender = (props) => {
    return (
        <p>
            <Title>
                <h3>{props.title}</h3>
            </Title>
            <StyledIframe src={props.src} allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" />
        </p>
    )
}

export default IframeRender

const StyledIframe = styled.iframe`
    width: 100%;
    margin: 0rem auto;
    padding: 0 10% 0 30%;
    border: none;
    height: 1536px;

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