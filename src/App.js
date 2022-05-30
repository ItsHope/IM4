import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Blogs from "./components/Blogs"
import Design from "./components/Design"
import InternetArtwork from "./components/InternetArtwork"
import Navbar from "./components/Navbar/Navbar"





const App = () =>  {
  return (

    <Router>
       <Navbar/>

      <Switch>
        <Route path="/" compenent={Home} exact >
          <Home/>
          </Route>
          <Route path="/blogs" compenent={Blogs} exact >
          <Blogs/>
          </Route>
          <Route path="/design" compenent={Design} exact >
          <Design/>
          </Route>
          <Route path="/internetartwork" compenent={InternetArtwork} exact >
          <InternetArtwork/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

