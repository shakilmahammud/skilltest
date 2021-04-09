import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import { Login } from './Components/Authentication/Login/Login';
import { Signup } from './Components/Authentication/SignUp/Signup';
import { Home } from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path="/">
             <Login/>
        </Route>
        <Route  path="/home">
             <Home/>
        </Route>
        <Route  path="/signup">
             <Signup/>
        </Route>
    </Switch> 
 </Router>
  );
}

export default App;
