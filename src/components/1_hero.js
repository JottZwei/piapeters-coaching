import React from 'react'
import styled from 'styled-components'
import { Container, Headline1, Headline2, ButtonInternal } from './defaultComponents'
import { StaticImage } from 'gatsby-plugin-image'
import { FaLongArrowAltDown } from 'react-icons/fa'

const Wrap = styled.section`
    width: 100%;
    height: 100vh;
    background: linear-gradient(-180deg, white, lightgrey );
    text-align: center;
    overflow:hidden;

    & ${Headline1}{
                text-transform: uppercase;
                margin-top: 5vw;
            }

    & ${Headline2}{
        color: var(--primary-color);
        margin-bottom: 30px;
        font-family: omnes-pro, sans-serif;
                font-weight: 400;
                font-size: 1.3rem;
    }

    @media screen and (min-width: 1000px){
        text-align: left;

        & > ${Container}{
            display: grid;
            height: 100%;
            grid-template-columns: 1fr 1fr;

            & ${Headline1}{
                margin-top: 0;
                margin-bottom: 20px;
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
    padding-top: 100px;
`

const Strong = styled.span`
    font-weight: 700;
`

const hero = () => {
    return (
        <Wrap id="home" >
            <Container>
                <LeftContent>
                    <Headline1>Pia <Strong>Peters</Strong></Headline1>
                    <Headline2>Coachin und Organisationsberaterin</Headline2>
                    <ButtonInternal to="#willkommen">Mehr erfahren <FaLongArrowAltDown /></ButtonInternal>
                </LeftContent>
                <RightContent>
                    <StaticImage src="../images/pp_image_04.png" alt="Pia Peters Coaching Logo" placeholder="blurred" width={500} />
                </RightContent>
            </Container>
        </Wrap>
    )
}

export default hero
