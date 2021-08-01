import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from './defaultComponents'
import { FaBars } from 'react-icons/fa';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Wrap = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 5px 20px;
    position: fixed;
    width: 100%;
    z-index: 99;

    & > ${Container}{
        display: flex; 
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 1000px){
            justify-content: center;
        }
    }

    @media screen and (min-width: 1001px){
        top: 0;
        padding: 10px;
        background: ${({active}) => active ? "#fffb" : "#fff0"};
        backdrop-filter: ${({active}) => active ? "blur(15px)" : "blur(0px)"};
        transition: 0.5s ease background-color, .3s ease backdrop-filter;
    }

    @media screen and (max-width: 1000px){
        bottom: 0;
        background: white;
    }
`

const Logo = styled.div`
    width: ${({active}) => active ? "50px" : "200px"};
    transition: width 0.2s ease;

    @media screen and (max-width: 1000px){
        display: none;
    }
`

const Nav = styled.nav`
    display: flex; 
    color: var(--primary-color);
    text-transform: uppercase;
`  
const NavItem = styled.a`
    text-decoration: none;
    color: var(--primary-color);
    font-size: .8rem;
    cursor: pointer;
`

const NavItems = styled.div`
    display: flex;
    gap: 3vw;
    column-gap: 3vw;
`

const MobileIcon = styled.div`
    display: none;
`

const Navbar = () => {

    const [scroll, setScroll] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])


    return (
        <Wrap active={scroll}>
            <Container>
            <Logo active={scroll}>
                <StaticImage src="../images/logo_web.png" alt="Pia Peters Coaching Logo" placeholder="blurred" loading="eager" width={120} />
            </Logo>
            <Nav>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavItems>
                    <NavItem onClick={() => scrollTo('#willkommen')}>Home</NavItem>
                    <NavItem onClick={() => scrollTo('#schwerpunkte')}>Schwerpunkte</NavItem>
                    <NavItem onClick={() => scrollTo('#uebermich')}>Über mich</NavItem>
                    <NavItem onClick={() => scrollTo('#kontakt')}>Kontakt</NavItem>
                </NavItems>
            </Nav>
            </Container>
        </Wrap>
    )
}

export default Navbar
