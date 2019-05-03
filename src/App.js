import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          {" "}
          <Hero heroName="Batman" />{" "}
        </ErrorBoundary>
        <ErrorBoundary>
          {" "}
          <Hero heroName="Superman" />{" "}
        </ErrorBoundary>
        <ErrorBoundary>
          {" "}
          <Hero heroName="jocker" />{" "}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
