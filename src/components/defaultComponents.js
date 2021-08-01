import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
    width: min(90%, 1100px);
    margin: 0 auto;

    @supports not (width: min(90%, 1200px)){
        width: 90%;
        max-width: 1100px;
    }
`

export const Headline1 = styled.h1`
    font-size: clamp(2.5rem, 2.7rem + 0.4848vw, 4rem);
    line-height: clamp(2.7rem, 2.9rem + 0.4848vw, 4.2rem);
    font-weight: 700;
    color: var(--primary-color);
    text-transform: uppercase;
`

export const Headline2 = styled.h2`
    font-size: clamp(1.6rem, 1.4rem + 0.4848vw, 3rem);
    line-height: clamp(1.8rem, 1.6rem + 0.4848vw, 3.2rem);
`

export const Headline3 = styled.h3`
    font-size: clamp(1.2rem, 1.2rem + 0.4848vw, 1.7rem);
    line-height: clamp(1.4rem, 1.4rem + 0.4848vw, 1.9rem);
`

export const Headline4 = styled.h4`
    font-size: clamp(1.2rem, 1.2rem + 0.4848vw, 1.7rem);
    line-height: clamp(1.4rem, 1.4rem + 0.4848vw, 1.9rem);
`

export const Text = styled.span`
    font-size: clamp(.8rem, 0.45rem + 0.4848vw, 1.2rem);
    line-height: 1.7em;
    font-family: omnes-pro, sans-serif;
    font-weight: 200;
`

export const ButtonInternal = styled(Link)`
    border: 3px solid var(--primary-color);
    color: var(--primary-color);
    padding: 15px 20px;
    box-sizing: border-box;
    display: inline-block;
    text-decoration: none;
    transition: 0.2s ease color, 0.2s ease background-color;

    &:hover {
        color: var(--white);
        background: var(--primary-color);
    }
`

export const ButtonExternal = styled.a`
    border: 3px solid var(--primary-color);
    color: var(--primary-color);
    padding: 15px 20px;
    box-sizing: border-box;
    display: inline-block;
    text-decoration: none;
    transition: 0.2s ease color, 0.2s ease background-color;
    cursor: pointer;

    &:hover {
        color: var(--white);
        background: var(--primary-color);
    }
`