import React from 'react'
import { Headline4, Text } from './defaultComponents'
import styled from 'styled-components'

const Wrap = styled.div`
    border: 5px solid var(--primary-color);
    padding: 3vw;
    position: relative;

    & > ${Headline4}{
        position: absolute;
        top: -25px;
        left: calc(5vw - 10px );
        background: white;
        padding: 0 20px;
    }
`

const VitaItem = ({headline, text}) => {
    return (
        <Wrap>
            <Headline4>{headline}</Headline4>
            <Text>{text}</Text>
        </Wrap>
    )
}

export default VitaItem

