import './App.css';
import Header from './conpnents/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './conpnents/Home/Home';
import SingleServices from './conpnents/SingleServices/SingleServices';
import Testimonials from './conpnents/Testimonials/Testimonials';
import SingleTestimonial from './conpnents/SingleTestimonial/SingleTestimonial';
import Doctors from './conpnents/Doctors/Doctors';
import SingleDorctors from './conpnents/SingleDorctors/SingleDorctors';

function App() {
  return (
    <div>
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
          </Route>
          <Route path="/doctor/:key">
            <SingleDorctors></SingleDorctors>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
