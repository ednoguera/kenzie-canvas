import { Form, Input, Button, Menu, Item } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Image = styled.img`
    height: 32vmin;
    pointer-events: none;

    @media (min-width: 320px) and (max-width: 1024px) {
        height: 50vmin;
        padding-left: 10px;
    }
`

const Figure = styled.figure`
    padding: 12% 0 0 40%;

    @media (min-width: 320px) and (max-width: 1024px) {
        height: 50vmin;
        padding-left: 0px;
        padding-top: 40%;
    }
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

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        height: 100vh;
        z-index: -1; 

        p {
            font-size: 16px;
            text-align: left;
        }
        
        
    }
`

const ImageSide = styled.img`
    height: 25vmin;
    pointer-events: none;

    @media (min-width: 320px) and (max-width: 1024px) {
        filter: blur(40px);     
    }


`

const TextContainer = styled.span`
    width: 70%;
    color: white;
    margin: 2.5rem;
    paddin-top: 1.5rem;
    font-size: 17px;
    text-align: left;

    @media (min-width: 320px) and (max-width: 1024px) {
        filter: blur(20px);     
    }
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

    @media (min-width: 320px) and (max-width: 1024px) {
        filter: blur(20px);     
    }
`

const FormContainer = styled(Form)`
    padding: 0 0 0 40%;

    p {
        text-align: left;
        font-weight: bold;
        padding-left: 35%;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
       width: 95%;
       padding-top: 40%;
       padding-left: 5%;
       
       p {
           font-size: 18px;
           font-weight: bold;
           color: #fff;
       }
    }
`

const StyledButton = styled(Button)`
    background-color: #714191;
    width: 30%;
    height: 50px;
    border-radius: 10px;
    font-weight: bold;

    @media (min-width: 320px) and (max-width: 1024px) {
       width: 80%;
       color: #fff;
    }
`

const StyledInput = styled(Input.Password)`
    width: 30%;
    height: 50px;
    border-radius: 10px;

    @media (min-width: 320px) and (max-width: 1024px) {
       left: 0px;
       width: 80%;     
    }
`

const PageContainer = styled.div`
    width: 70%;
    margin: 2rem auto;
    text-align: left;
    padding: 0 5% 5% 15%;

    h2 {
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 22px;
        font-weight: bold;
    }

    p {
        font-size: 18px;
    }

    figure {
        display: flex;
        justify-content: center;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0 5% 5% 5%;
        
        h3 {
            font-size: 18px;
        }

        p {
            font-size: 16px;
        }

        a {
            font-size: 16px;
        }
    }
    
`

const HeaderContainer = styled.div`
    h2 {
        font-size: 26px;
        font-weith: bold;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
       h2 {
            font-size: 18px;
            font-weith: bold;
        }
    }
`

const Img = styled.img`
    width: 90%;
    height: 80%;
`

const StyledHeader = styled.header`
    background-color: #f9f9f9;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 0;
    padding-left: 10%;
    width: 100%;
    height: 70px;
    border-bottom: 5px solid #5fdbfa;
    display: flex;
    align-items: center;

    h1 {
        font-weight: bold;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        height: 100px;
        background-color: #05143c;


    }
`
const StyledMenuButton = styled.button`
    border-style: none;
    background-color: rgba(255, 0, 0, 0);
    
    @media (min-width: 320px) and (max-width: 1024px) {
        padding-left: 0px;
    }
`

const Hamburguer = styled(MenuOutlined)`
    font-size: 30px;
    color: #05143c;

    @media (min-width: 320px) and (max-width: 1024px) {
        color: #fff;
        font-size: 26px;
    }
`

const MenuContainer = styled.div`
    margin: 1rem;
`

const HeaderTitleContainer = styled.div`
    margin: 1rem;
    color: #05143c;
    font-size: 15px;
    font-weight: bold;
    padding-top: 15px;
    font-family: 'Montserrat', sans-serif;

    @media (min-width: 320px) and (max-width: 1024px) {
        
        h1 {
            color: #fff;
            font-size: 20px;
        }
    }
`

const CloseButton = styled(CloseOutlined)`
    font-size: 30px;
    color: #05143c;

    @media (min-width: 320px) and (max-width: 1024px) {
        color: #fff;
        font-size: 26px;
        font-weight: bold;
    }
`

const StyledIframe = styled.iframe`
    width: 100%;
    margin: 0rem auto;
    padding: 0 10% 10% 30%;
    border: none;
    height: 100vh;

    ::-webkit-scrollbar {
        width: 8px;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
    }
`

const IframeTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 2rem auto;
    padding: 0 0 0 30.5%;

    h3 {
        font-size: 32px;
        font-weight: bold;
        text-align: center;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        padding-left: 15%;

        h3 {
            font-size: 26px;
            text-align: left;
        }

    }
    
`

const SideNavModules = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 8%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #05143c; /* Blue */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 20px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        display: none;
    }
`

const ImageSideBarModules = styled.img`
    height: 8vmin;
    pointer-events: none;

`

const StyledSideMenu = styled(Menu)`
    background-color: #f9f9f9;
    border: none;
    font-size: 16px;
    font-weight: bold;    
`

const MenuItem = styled(Menu.Item)`
    background-color: none;
`

const SideBarLessonsMenu = styled.div`
    height: 90%; /* Full-height: remove this if you want "auto" height */
    width: 20%; /* Set the width of the sidebar */
    position: fixed;  /*Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 70px; /* Stay at the top */
    left: 8%;
    background-color: #f9f9f9; /* Light grey*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding: 10px 0 50px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f9f9f9;
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(#0479fb, #5fdbfa);
        border-radius: 20px;
        box-shadow: 0 0 20px 5px gray;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #5fdbfa;
        box-shadow: 0 0 0px 5px #e6f7fe;
    }

    /*RESPONSIVE*/
    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        padding: 0 0 0 0;
        left: 0;
        top: 100px;
    }
`

const SiderLivesContainer = styled.div`
    width: 85%;
    background-color: #0479fb;
    margin: 10px 0 10px 0;
    padding: 10px 0 0 0;
    border-radius: 10px;
    box-shadow: 0 0 5px grey;

    h2 {
        font-weight: bold;
        font-size: 18px;
        color: #fff;
    }

    &:hover {
        background-color: #0159b7;
        box-shadow: 0 0 15px #5fdbfa;

        h2 {
            text-shadow: 0 0 5px #fff;
        }
    }
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
    StyledInput,
    PageContainer,
    HeaderContainer,
    Img,
    StyledMenuButton,
    Hamburguer,
    MenuContainer,
    HeaderTitleContainer,
    CloseButton,
    StyledHeader,
    StyledIframe,
    IframeTitle,
    SideNavModules,
    ImageSideBarModules,
    StyledSideMenu,
    MenuItem,
    SideBarLessonsMenu,
    SiderLivesContainer
}