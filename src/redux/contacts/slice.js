import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, toggleFavorite } from './operations';

const getActions = type =>
  isAnyOf(fetchContacts[type], addContact[type], deleteContact[type], toggleFavorite[type]);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.items.findIndex(contact => contact.id === payload.id);
        state.items.splice(index, 1);
      })
      .addCase(toggleFavorite.fulfilled, (state, { payload }) => {
        const contact = state.items.find(contact => contact.id === payload.id);
        if (contact) {
          contact.isFavorite = payload.isFavorite;
        }
      })
      .addMatcher(getActions('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getActions('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const { addContactEl, deleteContactEl, toggleFavoriteEl } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
