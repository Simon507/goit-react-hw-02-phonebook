import PropTypes from 'prop-types';

export const ContactList = ({ contacts, nameFind, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(item => (
          <li className="item" key={item.id}>
            {item.name.toLowerCase().includes(nameFind.toLowerCase()) && (
              <>
                <p>{item.name}</p>
                <p>{item.number}</p>
                <button onClick={() => onDelete(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
