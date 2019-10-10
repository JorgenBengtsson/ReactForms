import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Alert from "react-bootstrap/Alert";

export default class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      passwordAgain: "",
      fetchFailed: false,
      error: ""
    };
  }
  submitForm = event => {
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
    })
      .then()
      .catch(() => {
        this.setState({ fetchFailed: true });
      });
    event.preventDefault();
  };
  doPasswordMatch(password, passwordAgain) {
    if (!(password === passwordAgain)) {
      this.setState({ error: "Password dont match!" });
    } else {
      this.setState({ error: "" });
    }
  }
  isNumber(input) {
    if (isNaN(+input) && !(input === "")) {
      this.setState({ error: "Not a number" });
    } else {
      this.setState({ error: "" });
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      this.setState({ error: "Wrong epost" });
    } else {
      this.setState({ error: "" });
    }
  }
  render() {
    return (
      <form onSubmit={e => this.submitForm(e)}>
        <Container>
          <Row>
            <Col xs={2}>Username</Col>
            <Col>
              <input
                value={this.state.username}
                onChange={e => {
                  this.setState({ username: e.target.value });
                  this.validateEmail(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={2}>Password</Col>
            <Col>
              <input
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                  this.isNumber(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={2}>Password again</Col>
            <Col>
              <input
                value={this.state.passwordAgain}
                onChange={e => {
                  this.setState({ passwordAgain: e.target.value });
                  this.doPasswordMatch(e.target.value, this.state.password);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit">Click Me</Button>
            </Col>
          </Row>
        </Container>
        {this.state.fetchFailed ? (
          <Alert
            variant="danger"
            onClose={() => this.setState({ fetchFailed: false })}
            dismissible
          >
            <Alert.Heading>Submit Alert</Alert.Heading>Error while trying to
            make a submit!
          </Alert>
        ) : (
          <></>
        )}
      </form>
    );
  }
}
