import React, { Component } from "react";

export default class InputValidation extends Component {
  constructor() {
    super();
    this.state = { value: "", error: "" };
  }
  isInputValidInput(input) {
    if (isNaN(+input) && !(input === "")) {
      this.setState({ error: "Not a number" });
    } else {
      this.setState({ error: "" });
    }
  }
  required() {
    if (this.state.value === "") {
      this.setState({ error: "Is Required" });
    } else {
      this.setState({ error: "" });
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  render() {
    return (
      <>
        {this.state.error}
        <input
          value={this.state.value}
          onChange={e => {
            this.required(e.target.value);
            this.isInputValidInput(e.target.value);
            this.setState({ value: e.target.value });
          }}
        />
        <input
          value={this.state.email}
          onChange={e => {
            if (!this.validateEmail(e.target.value)) {
              this.setState({ error: "Not Valid email" });
            } else {
              this.setState({ error: "" });
            }
            this.setState({ email: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.required();
          }}
        >
          Submit
        </button>
      </>
    );
  }
}
