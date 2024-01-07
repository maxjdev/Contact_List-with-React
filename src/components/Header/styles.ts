import styled from 'styled-components'
import vars from '../../styles/vars'

export const Head = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${vars.gray};
  color: #333;

  img {
    margin-right: 10px;
  }
`
