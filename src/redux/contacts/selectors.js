import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.phonebook.contacts;

export const selectIsLoading = state => state.phonebook.isLoading;

export const selectError = state => state.phonebook.error;

export const selectFilter = state => state.phonebook.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
