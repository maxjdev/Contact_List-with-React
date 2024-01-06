import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../../store/reducers/contact'
import { Card, ActionBar, EditButton, RemoveButton, SaveButton } from './styles'
import ContactClass from '../../models/Contact'

type Props = ContactClass

const Contact = ({ name, email, tel }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useDispatch()

  return (
    <Card>
      <div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/contacts.png"
          alt="contacts"
        />
        <h3>{name}</h3>
      </div>
      <div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/material-outlined/24/new-post.png"
          alt="new-post"
        />
        <p>{email}</p>
      </div>
      <div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-filled/50/phone-disconnected.png"
          alt="phone-disconnected"
        />
        <p>{tel}</p>
      </div>
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={() => setIsEditing(false)}>Save</SaveButton>
            <RemoveButton>Cancel</RemoveButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <RemoveButton onClick={() => dispatch(remove(tel))}>
              Remove
            </RemoveButton>
          </>
        )}
      </ActionBar>
    </Card>
  )
}

export default Contact
