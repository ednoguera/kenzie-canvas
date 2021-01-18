import React from 'react'
import Navigation from './navigation_modules'
import styled from 'styled-components'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

const ContainerLessons = (props) => {

    const changeAccordion = () => {
        props.setAccordionMenu(props.mod)
    }


    return (
        <div>
            {/* <DropDownMenu>
                <h3 onClick={changeAccordion}>Módulo {props.title} {props.accordionMenu === props.mod ? <CaretUpOutlined /> : <CaretDownOutlined />}</h3>
            </DropDownMenu>
            {props.accordionMenu === props.mod ? props.lessons.filter(module => module.mod === props.mod).map((data, key) => <StyledNavigationLink key={key}><h3>{data.ref}</h3></StyledNavigationLink>) : null} */}
        </div>
    )
}

export default ContainerLessons

const StyledNavigationLink = styled(Navigation)`
    font-size: 22px;
    color: black;
    font-weight: bold;
    padding-right: 50px;
`

const DropDownMenu = styled.div`
    border-bottom: 2px solid #5fdbfa;
    font-size: 22px;
    font-weight: bold;
    width: 120%;
`
