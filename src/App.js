import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Pages/Home"
import Blogs from "./components/Pages/Blogs"
import Design from "./components/Pages/Design"
import InternetArtwork from "./components/Pages/InternetArtwork"
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

