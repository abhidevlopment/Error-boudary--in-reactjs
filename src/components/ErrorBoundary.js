import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }
  //Error boundary are react component that catch  j/s error in their child component tree
  //,log those error and display a fallback UI.
  //A class component beomes an error boundary by defining either both of getDerivedStateFromError
  //or componentDidCatch lifecycle method.
  //The placement of the ErrorBoundary also matters as it contains if the entire app should  have the fallback UI
  //or just the component causing the problem.
  //Providing a way to gracefully handle error in application code.
  static getDerivedStateFromError(Error) {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!!!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
