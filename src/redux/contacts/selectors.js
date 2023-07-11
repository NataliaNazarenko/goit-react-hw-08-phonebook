import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'redux/filter/selectors';

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

export const getFilterContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().trim().includes(normalizedFilter));
});
