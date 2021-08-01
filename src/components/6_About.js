import React from 'react'
import styled from 'styled-components'
import { Headline1, Container, Text } from './defaultComponents'

const Wrap = styled(Container)`

    & > ${Headline1}{
        margin-bottom: 50px;
    }

    @media screen and (min-width:1100px){
    margin: 100px auto;
    max-width: 800px;
    text-align: center;
    }

`

const About = () => {
    return (
        <Wrap id="uebermich" >
            <Headline1>
                Über Mich
            </Headline1>
            <Text>
                Als Coachin und Organisationsberaterin ist meine größte Motivation Menschen dabei zu helfen, ihre persönliche Zielvorstellung
                im beruflichen Umfeld zu erreichen. Meine Arbeitsweise in diesem Prozess ist geprägt von Ruhe und Gelassenheit,
                um meinen Klienten Raum zum Ausspeichern von Gedanken und Ideen zu geben. Dabei steht meine ehrliche Freude an der
                Entwicklung eines Menschen jeden Alters vom Anfang unseres Kennenlernens bis zum Ende an erster Stelle. Dieses Interesse
                hat sich durch meine zahlreichen Reisen in unterschiedliche Länder und Kulturen entwickelt.
                Mir wurde dabei vor Augen geführt, wie individuell jeder Mensch ist und, dass meistens nur ein kleiner Denkanstoß
                dazu führen kann, etwas Weitgreifendes im Leben eines Menschen zu bewirken.
            </Text>
        </Wrap>
    )
}

export default About
