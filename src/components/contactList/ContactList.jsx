import PropTypes from 'prop-types';

export const ContactList = ({ list }, onDelete) => {
  return (
    <ul>
      {list.map(item => (
        <li className="item" key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
