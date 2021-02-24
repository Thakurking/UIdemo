import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/screens/home";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </>
  );
}
