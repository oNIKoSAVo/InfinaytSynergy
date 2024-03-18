import React, { useState } from 'react';
import UsersList from './users/UsersList';
import UserEditor from './users/UserEditor';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <UsersList user={selectedUser} onUserSelect={setSelectedUser} />
      <UserEditor user={selectedUser} onUserSelect={setSelectedUser}/>
    </div>
  );
}

export default App;