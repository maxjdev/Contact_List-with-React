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

  button {
    padding: 8px;
    width: 30%;
    background-color: green;
    border-radius: 12px;
  }
`
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`
