import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      name: 'Name',
      email: 'name.sobrename@gmail.com',
      tel: '0'
    },
    {
      name: 'Name',
      email: 'name.sobrename@gmail.com',
      tel: '1'
    },
    {
      name: 'Name',
      email: 'name.sobrename@gmail.com',
      tel: '2'
    },
    {
      name: 'Name',
      email: 'name.sobrename@gmail.com',
      tel: '3'
    },
    {
      name: 'Name',
      email: 'name.sobrename@gmail.com',
      tel: '4'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contact) => contact.tel !== action.payload
      )
    },
    edit: (
      state,
      action: PayloadAction<{ tel: string; updatedContact: Contact }>
    ) => {
      const index = state.itens.findIndex(
        (contact) => contact.tel === action.payload.tel
      )
      if (index !== -1) {
        state.itens[index] = action.payload.updatedContact
      }
    },
    add: (state, action: PayloadAction<Contact>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { remove, edit, add } = contactSlice.actions
export default contactSlice.reducer
