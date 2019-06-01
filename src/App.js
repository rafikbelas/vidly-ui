import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/common/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies" component={() => <Movies />} />
          <Route path="/customers" component={() => <Customers />} />
          <Route path="/rentals" component={() => <Rentals />} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
