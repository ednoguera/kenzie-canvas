import React from 'react'
import Navigation from './navigation_modules'
import styled from 'styled-components'

const ContainerLessons = (props) => {
    return (
        <div>
            <h2>Módulo {props.title}</h2>
            {props.lessons.filter(module => module.mod === props.mod).map(data => <StyledNavigationLink><h3>{data.ref}</h3></StyledNavigationLink>)}
        </div>
    )
}

export default ContainerLessons

const StyledNavigationLink = styled(Navigation)`
    font-size: 22px;
    color: black;
    font-weight: bold;
`
