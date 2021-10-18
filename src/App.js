import './App.css';
import Header from './conpnents/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './conpnents/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
