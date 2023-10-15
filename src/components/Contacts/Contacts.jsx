import React from 'react';
import { getFilter } from 'redux/selectors';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContact();
  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
