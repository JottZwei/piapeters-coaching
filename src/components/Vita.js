import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Headline3, Text } from './defaultComponents'
import VitaItem from './VitaItem'

const Wrap = styled(Container)`

`

const VitaHead = styled.div` 
    border: 5px solid var(--primary-color);
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (min-width: 978px){
        margin-top: 200px;
        margin-bottom: 100px;

        & > div:first-child{
            margin-top: -150px;
        }
    }
`

const Content = styled.div`
    padding: 5vw;
`

const VitaContent = styled.div`
    display: grid;
    row-gap: 10vw;

    @media screen and (min-width: 978px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3vw;
    column-gap: 3vw;
    }
`



const Vita = () => {
    return (
        <Wrap>
            <VitaHead>
                <StaticImage src="../images/pp_image_04.png" alt="Pia Peters Coaching Logo" placeholder="blurred"  />
                <Content>
                    <Headline3>Vita</Headline3>
                    <Text>
                        Mein wirtschaftlicher Hintergrund begleitet
                        mich schon seit Anfang meines dualen
                        Studiums im Jahr 2014 und hat sich seitdem
                        durch meine berufliche Laufbahn gezogen.
                        Gerne würde ich Ihnen an dieser Stelle einige
                        Einblicke in meinen Lebenslauf geben:
                    </Text>
                </Content>
            </VitaHead>
            <VitaContent>
            <VitaItem headline="2014" text="2014 begann ich mein duales Studium bei einem großen Energiedienstleister im Norden Deutschlands in der klassischen Betriebswirtschaftslehre mit dem Schwerpunkt Energiewirtschaft. Ich habe einen Großteil meiner Zeit im Innovationsbereich verbringen dürfen und Projekte wie „New Work“ und „Agiles Arbeiten“ – immer nah am Menschen – bereichern dürfen." />
            <VitaItem headline="März 2020" text="Im März 2020 machte ich mich aufgrund meiner Leidenschaft, die durch das Arbeiten mit Menschen kam, selbstständig und habe große und kleine Unternehmen – und die Menschen dahinter – in Veränderungsphasen unterstützt." />
            <VitaItem headline="April 2020" text="Seit April 2020 studiere ich berufsbegleitend im Master „Beratung in der Arbeitswelt – Coaching, Supervision und Organisationsberatung“ an der University of Applied Sciences in Frankfurt am Main." />
            <VitaItem headline="2021" text="Seit Januar 2021 befinde ich mich hauptberuflich wieder in einer Festanstellung bei dem besagten Energieversorger und treibe mit viel Leidenschaft die dortigen Themen voran." />
            </VitaContent>
        </Wrap>
    )
}

export default Vita
