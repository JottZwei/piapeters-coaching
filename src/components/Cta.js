import React from 'react'
import styled from 'styled-components'
import { Headline1, ButtonExternal } from './defaultComponents'

const Wrap = styled.div`
    @media screen and (max-width: 977px){
        & > ${Headline1}{
            font-size: 2rem;
            line-height: 1.2;
        }
    }


    text-align: center;
    max-width: 500px;
    color: var(--primary-color);
    margin: 7vw auto;

    @media screen and (min-width: 978px){
    max-width: 500px;
    color: var(--primary-color);

    & > ${Headline1}{
        margin-bottom: 40px;
    }}
`

const Cta = () => {
    return (
        <Wrap>
            <Headline1>
                Kommen wir ins Gespräch!
            </Headline1>
            <ButtonExternal href="mailto:pia@petersgermany.net">Jetzt Kontakt aufnehmen!</ButtonExternal>
        </Wrap>
    )
}

export default Cta
