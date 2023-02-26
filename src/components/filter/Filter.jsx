import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { ContactList } from 'components/contactList/ContactList';

export class Filter extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  deleteItem = id => {
    console.log(id);
  };

  render() {
    return (
      <>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" placeholder="Jane" />

        <ContactList
          list={this.state.contacts}
          onDelete={this.deleteItem}
        ></ContactList>
      </>
    );
  }
}
