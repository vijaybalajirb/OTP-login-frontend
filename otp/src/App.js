import React from 'react';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom"
import './App.css';
import Dummy from './Components/Dummy';
import Login from './Components/Login';
import Register from './Components/Register';

function App(props) {
  return (
   <Router>
    <Switch>
      <Route exact path="/" render = {(props)=>{
        return(
          <Register/>
        )
      }}/>
      <Route exact path="/login" render  = {(props)=>{
        return(
          <Login/>
        )
      }}/>
        <Route exact path="/dummy" render = {(props)=>{
        return(
          <Dummy/>
        )
      }}/>
    </Switch>
  </Router>
  );
}

export default App;
