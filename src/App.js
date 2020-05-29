import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import Schedule from "./components/Schedule/Schedule.js";
import StaffList from "./components/StaffList/StaffList.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Schedule />
      <StaffList />

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
}

export default App;
