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

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFind: PropTypes.func.isRequired,
};
