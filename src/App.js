import React from "react";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MainWeather  from "./components/Mainweather";

import {Switch,Route} from "react-router-dom"

function App() {
  return (
    <div>
       
       <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/signIn" component={SignIn}></Route>
            <Route path="/signUp" component={SignUp}></Route>
            <Route path="/mainWeather" component={MainWeather}></Route>
          
       </Switch>
     
    </div>
  );
}

export default App;
