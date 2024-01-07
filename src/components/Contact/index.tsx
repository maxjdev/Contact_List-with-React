import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, edit } from '../../store/reducers/contact'
import { Card, ActionBar, EditButton, RemoveButton, SaveButton } from './styles'
import ContactClass from '../../models/Contact'

type Props = ContactClass

const Contact = ({ name, email, tel }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedContact, setEditedContact] = useState({ name, email, tel })
  const dispatch = useDispatch()

  const handleEdit = () => {
    dispatch(edit({ tel, updatedContact: editedContact }))
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)

    setEditedContact({ name, email, tel })
  }

  const handleInputChange = (field: string, value: string) => {
    setEditedContact((prevContact) => ({
      ...prevContact,
      [field]: value
    }))
  }

  return (
    <Card>
      <div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/contacts.png"
          alt="contacts"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedContact.name}
            onChange={(c) => handleInputChange('name', c.target.value)}
          />
        ) : (
          <h3>{name}</h3>
        )}
      </div>
      <div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/material-outlined/24/new-post.png"
          alt="new-post"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedContact.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        ) : (
          <p>{email}</p>
        )}
      </div>
      <div>
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-filled/50/phone-disconnected.png"
          alt="phone-disconnected"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedContact.tel}
            onChange={(c) => handleInputChange('tel', c.target.value)}
          />
        ) : (
          <p>{tel}</p>
        )}
      </div>
      <ActionBar>
        {isEditing ? (
          <>
            <SaveButton onClick={handleEdit}>Save</SaveButton>
            <RemoveButton onClick={handleCancelEdit}>Cancel</RemoveButton>
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
