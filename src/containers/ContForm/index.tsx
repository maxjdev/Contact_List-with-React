import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CForm, H2, RegisterButton, Main } from './styles'
import { add } from '../../store/reducers/contact'

const ContForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  const inputChange = (field: string, value: string) => {
    if (field === 'name') {
      setName(value)
    } else if (field === 'email') {
      setEmail(value)
    } else if (field === 'tel') {
      setTel(value)
    }
  }

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (name.trim() === '' || email.trim() === '' || tel.trim() === '') {
      return alert('Por favor, preencha todos os campos.')
    }

    const newContact = {
      name,
      email,
      tel
    }

    dispatch(add(newContact))
    navigate('/')

    setName('')
    setEmail('')
    setTel('')
  }

  return (
    <Main>
      <H2>Add New</H2>
      <CForm onSubmit={formSubmit}>
        <label htmlFor="">
          Name:
          <input
            value={name}
            onChange={(e) => inputChange('name', e.target.value)}
            type="text"
            placeholder="Name"
          />
        </label>
        <label htmlFor="">
          E-mail:
          <input
            value={email}
            onChange={(e) => inputChange('email', e.target.value)}
            type="email"
            placeholder="E-mail@gmail.com"
          />
        </label>
        <label htmlFor="">
          Tel:
          <input
            value={tel}
            onChange={(e) => inputChange('tel', e.target.value)}
            type="tel"
            placeholder="00 00000-0000"
          />
        </label>
        <RegisterButton type="submit">Register</RegisterButton>
      </CForm>
    </Main>
  )
}
export default ContForm
