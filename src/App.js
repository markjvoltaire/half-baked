import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Auth from './views/Auth';
import { getUser, logout } from './services/users';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logOutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  console.log('The Current User is:', currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            {currentUser && (
              <div>
                <h1> I am signed in</h1>
                <button onClick={logOutUser}>Log Out</button>
              </div>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
