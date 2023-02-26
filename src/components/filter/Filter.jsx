import PropTypes from 'prop-types';

import { ContactList } from 'components/contactList/ContactList';

export const Filter = ({ contacts, filter, onDelete, onFind }) => {
  return (
    <>
      <label htmlFor="firstName">First Name</label>
      <input
        onChange={e => {
          onFind(e.target.value);
        }}
        id="firstName"
        name="firstName"
        placeholder="Jane"
      />

      <ContactList
        onDelete={onDelete}
        contacts={contacts}
        nameFind={filter}
      ></ContactList>
    </>
  );
};
