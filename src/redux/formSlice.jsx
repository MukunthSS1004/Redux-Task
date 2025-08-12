import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  contact: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    updateLastname: (state, action) => {
      state.lastname = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateContact: (state, action) => {
      state.contact = action.payload;
    },
  },
});

export const {
  updateFirstname,
  updateLastname,
  updateEmail,
  updateContact,
} = formSlice.actions;

export default formSlice.reducer;
