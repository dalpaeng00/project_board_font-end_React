import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./component/route/RouterComponent";
import AppRouter from "./component/route/RouterComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
