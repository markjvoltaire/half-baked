// import { getUser, logout } from './services/users';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Auth from './views/Auth';

function App() {
  // const [currentUser, setCurrentUser] = useState(getUser());

  // const logOut = async () => {
  //   await logout();
  //   setCurrentUser(null);
  //   console.log(currentUser);
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Auth />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
