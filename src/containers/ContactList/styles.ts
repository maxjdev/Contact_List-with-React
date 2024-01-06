import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4vh 6vw;

  @media (max-width: 768px) {
    display: block;
  }
`
