import './App.css';
import Header from './conpnents/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './conpnents/Home/Home';
import SingleServices from './conpnents/SingleServices/SingleServices';
import Testimonials from './conpnents/Testimonials/Testimonials';
import Doctors from './conpnents/Doctors/Doctors';
import Login from './conpnents/Login/Login';
import AuthProvider from './utilities/fakeData/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service/:unid">
              <SingleServices></SingleServices>
            </Route>
            <Route path="/testimonals">
              <Testimonials></Testimonials>
            </Route>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
