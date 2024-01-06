import styled from 'styled-components'

export const CForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    input {
      padding: 8px;
      border-radius: 12px;
      width: 400px;
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
  width: 30%;
  background-color: #32cd32;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #00ff00;
    transform: scale(1.05);
  }
`
