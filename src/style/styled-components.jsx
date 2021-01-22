import { Form, Input, Button } from 'antd'
import styled from 'styled-components'

const Image = styled.img`
    height: 32vmin;
    pointer-events: none;
`

const Figure = styled.figure`
    padding: 12% 0 0 40%;
`

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

const ImageSide = styled.img`
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

const FormContainer = styled(Form)`
    padding-top: 1%;
    padding-left: 10%;
`

const StyledButton = styled(Button)`
    background-color: #714191;
    width: 30%;
    height: 50px;
    border-radius: 10px;
    font-weight: bold;
`

const StyledInput = styled(Input.Password)`
    height: 50px;
    border-radius: 10px;
`

export {
    Image,
    Figure,
    ImageSide,
    SideNav,
    TextContainer,
    TitleContainer,
    FormContainer,
    StyledButton,
    StyledInput
}