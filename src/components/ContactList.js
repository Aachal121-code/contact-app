import React from 'react';

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td data-label="Name">{contact.name}</td>
                <td data-label="Email">{contact.email}</td>
                <td data-label="Phone">{contact.phone}</td>
                <td data-label="Actions">
                  <button onClick={() => deleteContact(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContactList;
