import React from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../services/apiService";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      showError: false
    };
  }

  handleSubmitForm = async e => {
    e.preventDefault();
    console.log("submit form");
    const { name, email, password } = this.state;
    const { handleSignup } = this.props;
    console.log(email);
    console.log(password);
    console.log(name);
    try {
      const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      await handleSignup({ name, email, password });
      // await signUp(data);
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
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        {errorMessage}
        <h1>Sign Up</h1>
        <form className="form" onSubmit={this.handleSubmitForm}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleTextInput}
              value={this.state.username}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={this.handleTextInput}
              value={this.state.email}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="text"
              name="password"
              onChange={this.handleTextInput}
              value={this.state.password}
            />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
