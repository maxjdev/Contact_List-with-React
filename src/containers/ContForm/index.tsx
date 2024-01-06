import { Main } from '../ContactList/styles'
import { CForm, H2 } from './styles'

const ContForm = () => (
  <Main>
    <H2>Add New</H2>
    <CForm>
      <label htmlFor="">
        Name:
        <input type="text" name="" id="" placeholder="Name" />
      </label>
      <label htmlFor="">
        E-mail:
        <input type="email" name="" id="" placeholder="E-mail@gmail.com" />
      </label>
      <label htmlFor="">
        Tel:
        <input type="tel" name="" id="" placeholder="00 00000-0000" />
      </label>
      <button>Register</button>
    </CForm>
  </Main>
)

export default ContForm
