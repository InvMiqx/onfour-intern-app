import React, { useEffect } from "react";
import logo from "./logo.svg";
import Grid from "./components/grid";
import "./App.css";

const App = () => {
  // ADD JAVASCRIPT CODE HERE

  // useEffect hook that runs when App is "mounted"
  useEffect(() => {
    // Get JSON data here
  }, []);

  // HTML RENDERING DONE IN THE RETURN STATEMENT
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
