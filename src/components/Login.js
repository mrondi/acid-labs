import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "mauroro",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <img
          className="logo"
          src="http://acid.cl/wp-content/uploads/2018/01/LOGO-ACID-white.png"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </div>
          <button disabled={!this.validateForm()} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}
