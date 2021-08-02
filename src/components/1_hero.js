import React from 'react'
import styled from 'styled-components'
import { Container, Headline1, Headline2, ButtonExternal } from './defaultComponents'
import { StaticImage } from 'gatsby-plugin-image'
import { FaLongArrowAltDown } from 'react-icons/fa'
import scrollTo from 'gatsby-plugin-smoothscroll';


const Wrap = styled.section`
    width: 100%;
    max-width:100%;
    box-sizing:border-box;
    height: 100vh;
    background: linear-gradient(-180deg, white, lightgrey );
    text-align: center;
    overflow: hidden;

    & ${Headline1}{
                text-transform: uppercase;
                margin-top: 5vw;
                font-weight: 500;
            }

    & ${Headline2}{
        color: var(--primary-color);
        margin-bottom: 30px;
        font-family: omnes-pro, sans-serif;
                font-weight: 400;
                font-size: 1.1rem;
    }

    @media screen and (min-width: 1000px){
        text-align: left;

        & > ${Container}{
            display: grid;
            height: 100%;
            grid-template-columns: 1fr 1fr;

            & ${Headline1}{
                margin-top: 0;
            }

            & svg {
                margin-bottom: -5px;
            }
        }
    }
`

const LeftContent = styled.div`
    align-self: center;
`

const RightContent = styled.div`
    align-self: flex-end;
    justify-self: center;
    @media screen and (min-width: 1000px){
        padding-top: 100px;
    }
`

const Strong = styled.span`
    font-weight: 700;
`

const Grey = styled.span`
    color: var(--text-color);
`

const hero = () => {
    return (
        <Wrap id="home" >
            <Container>
                <LeftContent>
                    <Headline1>Pia <Strong>Peters</Strong></Headline1>
                    <Headline2><Grey>Coachin und Organisationsberaterin</Grey></Headline2>
                    <ButtonExternal onClick={() => scrollTo('#willkommen')}>Mehr erfahren <FaLongArrowAltDown /></ButtonExternal>
                </LeftContent>
                <RightContent>
                    <StaticImage src="../images/pp_image_04.png" alt="Pia Peters Coaching Logo" placeholder="blurred" width={500} />
                </RightContent>
            </Container>
        </Wrap>
    )
}

export default hero
