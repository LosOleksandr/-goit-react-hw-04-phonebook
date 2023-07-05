import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm';
import PhonebookList from 'components/PhonebookList';
import Section from 'components/Section';
import { Container } from 'App.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const addContact = data => {
    data = {
      id: shortid.generate(),
      ...data,
    };
    const isContactExist = contacts.some(
      ({ phoneNumber }) => phoneNumber === data.phoneNumber
    );

    if (isContactExist) {
      toast.error(
        'Contact with this number was already added to the phonebook'
      );
      return;
    }
    setContacts([data, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(({ firstName }) =>
    firstName.toLowerCase().includes(filter.toLowerCase().trim())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <PhonebookForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={setFilter} />
        {contacts.length !== 0 ? (
          <PhonebookList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        ) : (
          <h2>No contacts!</h2>
        )}

        {contacts.length !== 0 && !filteredContacts.length && (
          <h2>No matches!</h2>
        )}
      </Section>
      <ToastContainer />
    </Container>
  );
}
