import React from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showError: false
    };
  }

  handleSubmitForm = async e => {
    e.preventDefault();
    console.log("submit form");
    const { email, password } = this.state;
    const { handleLogin } = this.props;

    try {
      await handleLogin({ email, password });
    } catch (e) {
      this.setState(state => {
        return { showError: true };
      });
      throw e;
    }
  };

  handleTextInput = e => {
    e.preventDefault();

    const { name, value } = e.target;

    this.setState(state => {
      return { showError: false, [name]: value };
    });
  };

  render() {
    const { isSignedIn } = this.props;
    const { showError } = this.state;
    let errorMessage;
    if (showError) {
      errorMessage = (
        <div className="errorMessage">
          <span> An error Occured, please try again</span>
        </div>
      );
    }
    if (isSignedIn) {
      console.log(this.props);
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { user_id: "name" }
          }}
        />
      );
      // return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        {errorMessage}
        <h1>Login</h1>
        <form className="form" onSubmit={this.handleSubmitForm}>
          <div>
            <label>email</label>
            <input
              type="text"
              name="email"
              onChange={this.handleTextInput}
              value={this.state.email}
            />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleTextInput}
              value={this.state.password}
            />
          </div>
          <button>login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
