import React from 'react'
import styled from 'styled-components'
import { Container, Headline3, Text } from './defaultComponents'
import { StaticImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby'

const Wrap = styled(Container)`
    text-align: center;


    @media screen and (max-width: 977px){
        margin-bottom: 100px;
    }

@media screen and (min-width: 978px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3vw;
    column-gap: 3vw;
    padding: 50px 0;
}
`

const Button = styled(Link)`
    text-decoration: none;
    color: var(--text-color);
`


const Column = styled.div`
    @media screen and (max-width: 978px){
        margin-bottom: 30px;
    }

    & > ${Headline3}{
        margin-bottom: 20px;
    }
`

const Footer = () => {
    return (
        <Wrap>
            <Column>
                <Headline3>Kontakt</Headline3>
                <Text>
                    Pia Peters <br/>
                    Musterstraße 123 <br/>
                    123456 Musterstadt <br/>
                    Telfon 0123 456789 <br/><br />
                    E-Mail: pia@petersgermany.net
                </Text>
            </Column>
            <Column>
                <Headline3>Links</Headline3>
                <Text>
                    <Button to="impressum">Impressum</Button> <br />
                    <Button to="datenschutz">Datenschutzerklärung</Button>
                </Text>
            </Column>
            <Column>
                <StaticImage src="../images/logo_web.png" alt="Pia Peters Coaching Logo" placeholder="blurred"  />
            </Column>
        </Wrap>
    )
}

export default Footer
