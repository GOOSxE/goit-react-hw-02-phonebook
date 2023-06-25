import React from 'react';

export default class Contactslist extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contactsData.map(contact => (
            <li key={contact.id}>
              <button onClick={() => this.props.onContactRemoving(contact.id)}>Delete</button>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
