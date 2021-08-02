import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Headline1, Container, Text } from './defaultComponents'

const Wrap = styled.section`
    & ${Text}{
        display: inline-block;
        margin: 2vw auto;
    }
    
    @media screen and (min-width: 978px){
    text-align: center;
    margin-bottom: -50px;

        & ${Text}{
            max-width: 800px;
        }
    }
`

const BigImage = styled.div`
    @media screen and (min-width: 978px){
        position: relative;
        height: 70vh;
        width: 100%;
    }
`

const Image1 = styled.div`

    @media screen and (min-width: 978px){
    position: absolute;
    left:0;
    top:0;
    right: 25%;
    bottom: 10%;
    background: grey;
    
    & > div {
        height: 100%;
        width: 100%;
        z-index: 1;
    }

    &:before {
        content:'';
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 70%, rgba(255,255,255,1) 100%);
        position: absolute;
        left: 0;
        top: 0; 
        right: 0; 
        bottom: 0;
        z-index: 2;
    }
    }
`

const Box = styled.div`
margin-top: 30px;
    
    @media screen and (max-width: 977px){
        transform: translateY(-35%);
        display: flex;
        align-items: flex-end;
        box-sizing: border-box;
    } 


    @media screen and (min-width: 978px){
        text-transform: uppercase;
        border: 3px solid var(--primary-color);
        aspect-ratio: 1;
        padding: 10px;
        font-weight: 700;
        font-family: capitolina, serif;
        margin-left: auto;
        margin-right: 3vw;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 3;
        font-size: 3rem;
        width: 350px;
    }
`

const schwerpunkte = () => {
    return (
        <Wrap id="schwerpunkte">
            <Container>
            <Headline1>Schwer&shy;punkte</Headline1>
            <Text>Im Folgenden findest Du die Aufführung meines Leistungsangebots mit einigen wissenswerten Details, die meine Schwerpunkte näher beleuchten.</Text>
            <BigImage>
            <Image1>
                <StaticImage src="../images/pp_image_02.jpg" alt="Pia Peters Coaching Logo" width={600} placeholder="blurred" objectFit="cover" objectPosition="left top" />
            </Image1>
            <Box>Thinking outside the box.</Box>
        </BigImage>
            </Container>
        </Wrap>
    )
}

export default schwerpunkte
