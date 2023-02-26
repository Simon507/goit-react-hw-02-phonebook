import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Component } from 'react';
import { ContactForm } from './form/ContactForm';
import { Filter } from './filter/Filter';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />

      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter> </Filter>
    </Layout>
  );
};
