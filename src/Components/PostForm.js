import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

export default class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      password2: "",
      passwordMatch: ""
    };
  }
  handleClick = () => {
    fetch("http://localhost:65517/api/values", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then();
  };
  passwordMatch = (pwd1, pwd2) => {
    if (pwd1 === pwd2) {
      this.setState({ passwordMatch: "" });
    } else {
      this.setState({ passwordMatch: "Error" });
    }
  };
  render() {
    return (
      <>
        Username:{" "}
        <input
          type="text"
          value={this.state.username}
          onChange={e => this.setState({ username: e.target.value })}
        />
        Password:{" "}
        <input
          type="text"
          value={this.state.password}
          onChange={e => {
            this.passwordMatch(e.target.value, this.state.password2);
            this.setState({ password: e.target.value });
          }}
        />
        Password again:{" "}
        <input
          type="text"
          value={this.state.password2}
          onChange={e => {
            this.passwordMatch(e.target.value, this.state.password);
            this.setState({ password2: e.target.value });
          }}
        />
        {this.state.passwordMatch}
        <input
          type="button"
          onClick={() => this.handleClick()}
          value="Add User"
        />
      </>
    );
  }
}
