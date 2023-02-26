import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Component } from 'react';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';

export class App extends Component {
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

  addItem = (addName, addNumber, id) => {
    console.log(`adddd`);
  };

  findItem = findName => {
    this.setState({ filter: findName });
  };

  deleteItem = id => {
    this.setState(pervState => {
      return {
        contacts: pervState.contacts.filter(item => item.id !== id),
      };
    });
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />

        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          filter={this.state.filter}
          name={this.state.name}
          number={this.state.number}
          onDelete={this.deleteItem}
          onFind={this.findItem}
          // addItem={this.addItem}
        >
          {' '}
        </Filter>
      </Layout>
    );
  }
}
