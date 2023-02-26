import PropTypes from 'prop-types';

import { ContactList } from 'components/contactList/ContactList';

import { FindBlock, FindSection } from './filter.styles';

export const Filter = ({ contacts, filter, onDelete, onFind }) => {
  return (
    <>
      <h2>Contacts</h2>

      <FindSection>
        <FindBlock>
          <label htmlFor="name">Find contact</label>
          <input
            onChange={e => {
              onFind(e.target.value);
            }}
            id="name"
            name="name"
            placeholder="Please enter name"
          />
        </FindBlock>

        <ContactList
          onDelete={onDelete}
          contacts={contacts}
          nameFind={filter}
        ></ContactList>
      </FindSection>
    </>
  );
};
