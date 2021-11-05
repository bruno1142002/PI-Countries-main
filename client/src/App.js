import { Redirect, Route } from 'react-router';
import './App.css';
import { Nav } from './components/Nav/Nav';
import LandingPage  from './components/LandingPage/LandingPage';
import CountryDetails from './components/CountryDetails/CountryDetails'
import AddActivity from './components/AddActivity/AddActivity';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Redirect from='/' to='/home'></Redirect>
      <Route  exact path={["/","/home"]}><LandingPage/></Route>
      <Route  path={["/","/home", "/country", "/add", "/about"]}><Nav/></Route>
      <Route  exact path={["/","/home"]}><HomePage/></Route>
      <Route  exact path="/country/:id"><CountryDetails/></Route>     
      <Route  exact path="/add"><AddActivity/></Route>
      <Route  exact path="/about"><About/></Route>
    </div>
  );
}

export default App;
