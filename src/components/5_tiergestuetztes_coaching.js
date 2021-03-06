import React from 'react'
import styled from 'styled-components'
import { Headline3, Text, Container } from './defaultComponents'
import { StaticImage } from 'gatsby-plugin-image'

const Wrap = styled.section`
    margin-bottom: 50px;

    @media screen and (min-width: 978px){
        margin-bottom: 0px;
        margin-top: 100px;
        text-align:left;
        display: grid;
        position: relative;
        grid-template-columns: 1.5fr 1fr;
        gap: 30px;
        column-gap: 30px;
    }
`

const Content = styled.div`
    & > ${Headline3}{
        margin-bottom: 20px;
    }
    @media screen and (min-width: 978px){
        align-self: flex-end;
        width: 80%;
}

`

const BigImage = styled.div`
    margin-bottom: 20px;

    @media screen and (min-width: 978px){
        position: relative;
        z-index: 1;
        margin-bottom: 0px;
        
        &:before {
            content:'';
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%);
            position:absolute;
            left: 0;
            top: 0; 
            right: 0; 
            bottom: 0;
            z-index: 2;
        }
    }
`

const Box = styled.div`
    @media screen and (max-width: 977px){
margin-top: -55px;
margin-left: 10px;
margin-bottom: 30px;
z-index: 5;
transform: translateZ(0);
color: white;
    }

    @media screen and (min-width: 978px){
        display: inline;
        border: 3px solid var(--primary-color);
        padding: 20px;
        text-transform: uppercase;
        font-size: 3rem;
        position: absolute;
        left: 60%;
        width: 350px;
        transform: translateX(-50%);
        top: -50px;
        font-size: 700;
        font-weight: 800;
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: flex-end;
        z-index: 3;
        font-family: capitolina, serif;
    }
`

const tiercoaching = () => {
    return (
        <Container>
            <Wrap>
                <BigImage>
                    <StaticImage src="../images/pp_image_03.jpg" alt="Pia Peters Coaching Logo" placeholder="blurred"  />
                </BigImage>
                <Box>
                    <span>
                        Coming Soon.
                    </span>
                </Box>
                <Content>
                    <Headline3>Tiergest??tztes Coaching</Headline3>
                    <Text>
                    Beim tiergest??tzten Coaching wird der Coachee durch einen Vierbeiner, in diesem Fall einem Hund, in seinem Coaching-Prozess begleitet. Das Besondere am Hunde gest??tzten Coaching ist, dass der Hund als Spiegel unserer Selbst fungiert und dadurch neue Einblicke er??ffnet werden, die dem Coachee in der privaten und beruflichen Weiterentwicklung unterst??tzen sollen.
                    </Text>
                </Content>
            </Wrap>
        </Container>

    )
}

export default tiercoaching
