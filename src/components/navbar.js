import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from './defaultComponents'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaHome, FaCheck, FaUserAlt, FaEnvelope } from 'react-icons/fa'

const Wrap = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 15px 0px 30px;
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
        background: var(--primary-color);
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

    @media screen and (max-width: 1000px){
    color: var(--white);
    }
`

const MobIcon = styled.span`
display: block;
text-align: center;
color: var(--white);
@media screen and (min-width:1001px){
    display: none;
}
`

const NavItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 3vw;
    column-gap: 3vw;
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
                <NavItems>
                    <NavItem onClick={() => scrollTo('#willkommen')}><MobIcon><FaHome /></MobIcon>Home</NavItem>
                    <NavItem onClick={() => scrollTo('#schwerpunkte')}><MobIcon><FaCheck /></MobIcon>Schwerpunkte</NavItem>
                    <NavItem onClick={() => scrollTo('#uebermich')}><MobIcon><FaUserAlt /></MobIcon>Über mich</NavItem>
                    <NavItem onClick={() => scrollTo('#kontakt')}><MobIcon><FaEnvelope /></MobIcon>Kontakt</NavItem>
                </NavItems>
            </Nav>
            </Container>
        </Wrap>
    )
}

export default Navbar
