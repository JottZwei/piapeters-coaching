import React from 'react'
import styled from 'styled-components'
import { Container, Text } from './defaultComponents'


const Wrap = styled.section`
    padding: 7vw 0;

    & > ${Container}{
        max-width: 840px;
        margin: 0 auto;
    }
`


const Article = styled.article`
@media screen and (min-width: 978px){
    & ${Text}{
        text-align: center;
        margin-bottom: 30px;
        display: inline-block;
    }
}
  
`

const entry_text = () => {
    return (
        <Wrap id="willkommen">
            
        <Container>
            <Article>
            <Text>
                Befinden Sie sich zurzeit in einer beruflichen Veränderungs- oder Entwicklungssituation und sind unentschlossen,
                wohin Sie Ihr Weg führt? Möchten Sie diese Neufindung ergründen und eine auf Sie zugeschnittene Lösung finden?
            </Text>
            <Text>
                Auf meiner Seite rund um Coaching, Organisationsberatung und Moderation finden Sie bereits einige Anregungen,
                mit welchen Leistungen ich Sie auf dem Weg einer Neuausrichtung begleiten kann. Eine Analyse Ihrer
                momentanen Situation führt uns auf den Grund Ihrer Problematik und bringt uns letztendlich zu dem Ziel,
                Ihre Zielvorstellung in der neuen Umgebung zu erreichen. In diesem Prozess stehen Sie mit Ihren individuellen
                Kompetenzen und Ressourcen im Fokus. Durch eine intensive Zusammenarbeit können wir Ihre Fähigkeiten
                ausarbeiten und Sie auf Ihre neue Situation transferieren.
            </Text>
            <Text>
                Fühlen Sie sich angesprochen und möchten mehr über meine Methoden erfahren? Dann nehmen Sie gerne mit
                mir Kontakt auf und wir schauen in einem darauffolgenden Kennenlerngespräch, auf welche Weise ich Ihnen bei
                Ihrem Anliegen helfen kann. Ich freue mich auf Sie!
            </Text>
            </Article>
        </Container>
        </Wrap>
    )
}

export default entry_text
