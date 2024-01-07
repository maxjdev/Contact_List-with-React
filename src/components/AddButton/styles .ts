import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vars from '../../styles/vars'

export const Button = styled(Link)`
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${vars.darkGray};
  color: ${vars.white};
  font-weight: bold;
  font-size: 1.8em;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`
