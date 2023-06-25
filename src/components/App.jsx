import React from 'react';
import ContactForm from './Contact-form';
import Filter from './Filter';
import ContactsList from './Contact-list';
const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends React.Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  onContactAdding = contactData => {
    this.setState({ contacts: [...this.state.contacts, contactData] });
  };
  onContactRemoving = id => {
    console.log(id);
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onContactAdding={this.onContactAdding}></ContactForm>
        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        ></Filter>
        <h2>Contacts</h2>
        <ContactsList
          contactsData={filteredContacts}
          onContactRemoving={this.onContactRemoving}
        ></ContactsList>
      </div>
    );
  }
}
