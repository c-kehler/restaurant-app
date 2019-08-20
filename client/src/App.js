//Packages and libraries
import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Search from "./components/search";

//Components
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/LoginForm";
import Protectedroute from "./components/Protectedroute";
import SignupForm from "./components/SignupForm";

//Helper Functions
import { login, getProfile, signUp } from "./services/apiService";
import authService from "./services/authService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: {}
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

    this.setState(state => {
      return { isSignedIn: false, user: {} };
    });
  };

  render() {
    const { isSignedIn, user } = this.state;
    return (
      <div className="app-container">
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          {isSignedIn && (
            <div>
              <Link to={`/dashboard`}>Dashboard</Link>
            </div>
          )}
          {!isSignedIn ? (
            <div>
              <Link to="login">Login</Link>
            </div>
          ) : (
            <button onClick={this.signOutUser}> Sign Out</button>
          )}
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>

        <main>
         
          <Route exact path="/" component={Home} />
          <Protectedroute
            path={`/dashboard/`}
            user={user}
            venues={user.venues}
            component={Dashboard}
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
        </main>
        {/* <RatingCard/> */}
      </div>
    );
  }
}

export default App;
