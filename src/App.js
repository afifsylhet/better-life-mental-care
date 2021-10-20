import './App.css';
import Header from './conpnents/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './conpnents/Home/Home';
import SingleServices from './conpnents/SingleServices/SingleServices';
import Testimonials from './conpnents/Testimonials/Testimonials';
import Doctors from './conpnents/Doctors/Doctors';
import Login from './conpnents/Login/Login';
import AuthProvider from './utilities/fakeData/AuthProvider';
import PrivateRoute from './utilities/fakeData/PrivateRoute';
import About from './conpnents/About/About';
import Contact from './conpnents/Contact/Contact';
import Error from './conpnents/Error/Error';

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
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/service/:unid">
              <SingleServices></SingleServices>
            </PrivateRoute>
            <PrivateRoute path="/testimonals">
              <Testimonials></Testimonials>
            </PrivateRoute>
            <Route path="/doctor">
              <Doctors></Doctors>
            </Route>>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
