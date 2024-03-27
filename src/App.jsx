import { useState, useEffect } from 'react';
import UserContactList from './UserContactList.jsx';
import './App.css';

function App() {
  const [contactList, setContactList] = useState([]);
  const contact_API_BASE_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    const getContact = async () => {
      const response = await fetch(`${contact_API_BASE_URL}/users`);
      const userList = await response.json();
      setContactList(userList);
    };

    getContact();
  }, []);

  return (
    <>
      <h1>Users Contact List</h1>
      <UserContactList contactList={contactList} title='Name'/>
      <UserContactList contactList={contactList} title='Email'/>
      <UserContactList contactList={contactList} title='Phone'/>
    </>
  );
}

export default App;