import { Card } from './styles'

const Contact = () => (
  <Card>
    <div>
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/contacts.png"
        alt="contacts"
      />
      <h3>Nome</h3>
    </div>
    <div>
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/material-outlined/24/new-post.png"
        alt="new-post"
      />
      <p>E-mail</p>
    </div>
    <div>
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/ios-filled/50/phone-disconnected.png"
        alt="phone-disconnected"
      />
      <p>Tel-999</p>
    </div>

    <div>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  </Card>
)

export default Contact
