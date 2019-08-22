//Packages and libraries
import React from "react";
import { Route, Link } from "react-router-dom";
import "../App.css";

//Components
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import Login from "../components/LoginForm";
import Protectedroute from "../components/Protectedroute";
import SignupForm from "../components/SignupForm";

//Helper Functions
import { login, getProfile, signUp } from "../services/apiService";
import authService from "../services/authService";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: {},
      restToFav: {}
    };
  }

  async componentDidMount() {
    try {
      const fetchUser = await getProfile();
      this.setState(state => {
        return {
          isSignedIn: authService.isAuthenticated(),
          user: fetchUser
        };
      });
    } catch (e) {
      throw e;
    }
  }

  loginUser = async credentials => {
    try {
      const user = await login(credentials);
      localStorage.setItem("userID", user.id);
      console.log(user);
      this.setState(state => {
        return {
          isSignedIn: true,
          user: user
        };
      });
    } catch (e) {
      throw e;
    }
  };

  signUpUser = async credentials => {
    try {
      const user = await signUp(credentials);
      localStorage.setItem("userID", user.id);

      this.setState(state => {
        return {
          isSignedIn: true,
          user: user
        };
      });
    } catch (e) {
      throw e;
    }
  };

  signOutUser = () => {
    authService.signOut();
    localStorage.clear();
    this.setState(state => {
      return { isSignedIn: false, user: {} };
    });
  };

  render() {
    const { isSignedIn, user } = this.state;
    return (
      <div className="app-container">
        <Route
          exact
          path="/"
          render={props => <Home {...props} user={user} />}
        />

        <Protectedroute
          path={`/dashboard/`}
          component={Dashboard}
          user={user}
        />

        <Route
          path="/login"
          render={props => (
            <Login
              {...props}
              handleLogin={this.loginUser}
              isSignedIn={isSignedIn}
            />
          )}
        />

        <Route
          path="/signup"
          render={props => (
            <SignupForm
              {...props}
              handleSignup={this.signUpUser}
              isSignedIn={isSignedIn}
              signUp={signUp}
            />
          )}
        />
        <button onClick={this.signOutUser}>sign out</button>
      </div>
    );
  }
}

export default Auth;
