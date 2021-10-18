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
          </Route>
        </Switch>
      </BrowserRouter>



      <h1>Hello from home js</h1>
    </div>
  );
}

export default App;
