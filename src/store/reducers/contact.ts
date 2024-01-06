import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      name: 'Ze da Manga0',
      email: 'zedamanga0@gmail.com',
      tel: '0'
    },
    {
      name: 'Ze da Manga1',
      email: 'zedamanga1@gmail.com',
      tel: '1'
    },
    {
      name: 'Ze da Manga2',
      email: 'zedamanga2@gmail.com',
      tel: '2'
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
    }
  }
})

export const { remove } = contactSlice.actions
export default contactSlice.reducer
