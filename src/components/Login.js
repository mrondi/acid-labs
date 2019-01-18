import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
      rule.test(this.state.email.toLowerCase()) &&
      this.state.password.length > 4
    );
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
        <img className="logo" src="assets/logo.png" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div>
            <label>Password</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              autoComplete="off"
            />
          </div>
          <button disabled={!this.validateForm()} type="submit">
            Ingresar
          </button>
        </form>
      </div>
    );
  }
}
