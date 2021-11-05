import { Redirect, Route } from 'react-router';
import './App.css';
import { Nav } from './Components/Nav/Nav';
import LandingPage  from './Components/LandingPage/LandingPage';
import CountryDetails from './Components/CountryDetails/CountryDetails'
import AddActivity from './Components/AddActivity/AddActivity';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Redirect from='/' to='/home'></Redirect>
      <Route  exact path={["/","/home"]}><LandingPage/></Route>
      <Route  path={["/","/home", "/country", "/add", "/about"]}><Nav/></Route>
      <Route  exact path={["/","/home"]}><HomePage/></Route>
      <Route  exact path="/country/:id"><CountryDetails/></Route>     
      <Route  exact path="/Add"><AddActivity/></Route>
      <Route  exact path="/About"><About/></Route>
    </div>
  );
}

export default App;
