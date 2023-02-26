import PropTypes from 'prop-types';
import { ContactCard, ContactLst } from './contactList.styles';

export const ContactList = ({ contacts, nameFind, onDelete }) => {
  return (
    <>
      <ContactLst>
        {contacts.map(item => (
          <ContactCard className="item" key={item.id}>
            {item.name.toLowerCase().includes(nameFind.toLowerCase()) && (
              <>
                <p>{item.name}</p>
                <p>{item.number}</p>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </>
            )}
          </ContactCard>
        ))}
      </ContactLst>
    </>
  );
};
