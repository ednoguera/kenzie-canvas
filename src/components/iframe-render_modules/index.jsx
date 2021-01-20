import React from 'react'
import styled from 'styled-components'

const IframeRender = (props) => {
    return (
        <p>
            <StyledIframe src={props.src} width="100%" height="1536px" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" />
        </p>
    )
}

export default IframeRender

const StyledIframe = styled.iframe`
    width: 100%;
    height: 1024;
    padding: 0 20% 0 25%;
    border: none;

    h2 {
        color: red;
    }
`