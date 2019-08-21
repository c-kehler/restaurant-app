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
      <div className="signup-container">
        <div className="signup-info-container">
          <p className="info-header">Let's get to searching!</p>
          <div className="signup-info">
            <div className="info-icons">
              <div className="icon">
                <i class="fas fa-search" />
              </div>
              <div className="icon">
                <i class="fas fa-star" />
              </div>
              <div className="icon">
                <i class="fas fa-save" />
              </div>
            </div>
            <div>
              <p className="info-sub-header">Simple to use!</p>
              <p className="sub-info">
                Just enter the name of a bar or resturaunt in New York you want
                more info on.{" "}
              </p>
              <p className="info-sub-header">Easier to decide</p>
              <p className="sub-info">
                Our server magic will aggregate the ratings and give you the
                true 1-10!
              </p>
              <p className="info-sub-header">Save Your Search</p>
              <p className="sub-info">
                Found a place you love? Click the favorite button to save it to
                your dashboard.
              </p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <h1>Sign Up</h1>
          <form className="signup-form" onSubmit={this.handleSubmitForm}>
            <input
              placeholder="Username"
              type="text"
              name="name"
              onChange={this.handleTextInput}
              value={this.state.username}
            />
            <input
              placeholder="Enter Email Address"
              type="text"
              name="email"
              onChange={this.handleTextInput}
              value={this.state.email}
            />
            <input
              placeholder="Password"
              type="text"
              name="password"
              onChange={this.handleTextInput}
              value={this.state.password}
            />

            <button>Sign Up!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
