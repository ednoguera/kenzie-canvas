import React from 'react'
import styled from 'styled-components'

const IframeRender = () => {
    return (
        <p>
            <StyledIframe src="https://npepa32v9l.execute-api.us-east-1.amazonaws.com/v2/?project_id=19989138&filename=python/03_daypratice_data_structures.html&ref=master" width="100%" height="1024px" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" />
        </p>
    )
}

export default IframeRender

const StyledIframe = styled.iframe`
    width: 100%;
    height: 1024;
    padding: 0 20% 0 25%;
    border: none;
`