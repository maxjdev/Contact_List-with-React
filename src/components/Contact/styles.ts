import styled from 'styled-components'

export const Card = styled.div`
  display: block;
  padding: 12px;
  background-color: #bdbdbd;
  border-radius: 10px;

  button {
    padding: 12px;
    border: none;
    border-radius: 8px;
    margin: 4px 6px;
    cursor: pointer;

    &:hover {
      background-color: red;
    }
  }

  div {
    display: flex;
    margin: 4px 2px;

    img {
      margin-right: 12px;
    }
  }
`
