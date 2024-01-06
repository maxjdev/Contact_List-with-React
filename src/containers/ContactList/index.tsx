import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { Main } from './styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contact)

  return (
    <Main>
      <ul>
        {itens.map((c) => (
          <li key={c.tel}>
            <Contact name={c.name} email={c.email} tel={c.tel} />
          </li>
        ))}
      </ul>
    </Main>
  )
}

export default ContactList
