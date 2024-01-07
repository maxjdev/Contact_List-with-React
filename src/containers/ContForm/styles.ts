import styled from 'styled-components'
import vars from '../../styles/vars'

export const CForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    input {
      padding: 8px;
      border-radius: 12px;
      width: 400px;

      @media (max-width: 768px) {
        width: 90vw;
      }
    }
  }
`
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`

export const RegisterButton = styled.button`
  padding: 8px;
  width: 25vw;
  background-color: ${vars.green};
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${vars.greenHover};
    transform: scale(1.05);
  }
`

export const Main = styled.main`
  display: block;
  margin-top: 4vh;
  overflow-x: hidden;
`
