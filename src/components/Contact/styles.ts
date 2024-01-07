import styled from 'styled-components'
import vars from '../../styles/vars'

export const Card = styled.div`
  display: block;
  padding: 12px;
  background-color: ${vars.gray};
  border-radius: 10px;
  margin-bottom: 26px;

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
  background-color: ${vars.white};
  transition: transform 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: ${vars.gray2};
    transform: scale(1.05);
  }
`

export const RemoveButton = styled.button`
  background-color: ${vars.redOrange};
  transition: transform 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: ${vars.redHover};
    transform: scale(1.05);
  }
`

export const SaveButton = styled.button`
  background-color: ${vars.green};
  transition: transform 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    background-color: ${vars.greenHover};
    transform: scale(1.05);
  }
`
