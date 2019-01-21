import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  isValid() {
    const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return (
      rule.test(this.state.email.toLowerCase()) &&
      this.state.password.length > 4
    );
  }

  hChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <img className="logo" src="assets/logo.png" />
        <form onSubmit={this.submitForm}>
          <div>
            <label>Email</label>
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.hChange}
              autoComplete="off"
              autoFocusx
            />
          </div>
          <div>
            <label>Contraseña</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.hChange}
              type="password"
              autoComplete="off"
            />
          </div>
          <button disabled={!this.isValid()} type="submit">
            Ingresar
          </button>
          <p>
            <br />
            No tienes cuenta? <a href="#">Registrate</a>
            <br />
            <a href="#">Olvide mi contraseña</a>
          </p>
        </form>
      </div>
    );
  }
}
