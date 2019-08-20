//Packages and libraries
import React from "react";
import "./App.css";
import Auth from "./components/Auth";
//Components

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: {}
    };
  }

  render() {
    return <Auth />;
  }
}

export default App;
