import React from 'react'
import styled from 'styled-components'
import {  Container, Headline3, Text } from './defaultComponents'

const Wrap = styled(Container)`
    margin: 7vw auto;
`

const Content = styled.div`
    & > ${Headline3}{
        font-weight: 600;
        margin-bottom: 30px;
    }
    
    @media screen and (min-width: 978px){
        width: 50%;
    }
`

const coaching = () => {
    return (
            <Wrap>
                <Content>
                    
                <Headline3>Coaching</Headline3>
                <Text>Die Intention hinter einem Coaching ist es, Menschen dabei zu helfen,
ihre Ziele, ob privat oder beruflich, festzustecken und anschließend
zu erreichen. Um diese Ziele zu realisieren, werden sowohl vorhandene
Stärken genutzt, als auch unbekannte Stärken entwickelt, die im Prozess
des Coachings herausgearbeitet werden. Beim Coaching handelt es sich
um einen intensiven Austausch zwischen dem Coach und dem Coachee
in einem geschützten Raum. Während dieser Coaching-Sessions wird
der Coachee dabei unterstützt, sein Wissen für die gewünschte
Verhaltensänderung zu nutzen und diese dann im Job oder im privaten
Leben zu verwirklichen.</Text>
                </Content>
            </Wrap>
    )
}

export default coaching
