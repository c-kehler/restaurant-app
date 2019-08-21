//Packages and libraries
import React from "react";
import "./App.css";
import Auth from "./components/Auth";
//Components
import MyNavbar from "./components/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: {}
    };
  }

  render() {
    return (
      <div className= "App">
        <MyNavbar />
        <Auth />
      </div>
    );
  }
}

export default App;
