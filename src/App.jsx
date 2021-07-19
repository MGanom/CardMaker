import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
