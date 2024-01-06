import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: block;
`

export default GlobalStyle
