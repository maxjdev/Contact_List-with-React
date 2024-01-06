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
  }

  div {
    display: flex;
    margin: 4px 2px;

    img {
      margin-right: 12px;
    }
  }
`

export const ActionBar = styled.div`
  width: 100%;
  justify-content: space-around;
`

export const EditButton = styled.button`
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: #ccc;
    transform: scale(1.05);
  }
`

export const RemoveButton = styled.button`
  background-color: #ff4500;
  transition: transform 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: #ff0000;
    transform: scale(1.05);
  }
`
