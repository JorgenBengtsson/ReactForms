import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class MessagingUser extends Component {
  constructor() {
    super();
    this.state = { showAlert: false };
  }
  submit = () => {
    fetch("http://localhost:65517/api/values", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify("Making a submit")
    })
      .then()
      .catch(() => this.setState({ showAlert: true }));
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <button onClick={() => this.submit()}>
              Make a submit to backend
            </button>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            {this.state.showAlert ? (
              <Alert
                variant="danger"
                onClose={() => this.setState({ showAlert: false })}
                dismissible
              >
                <Alert.Heading>Submit Alert</Alert.Heading>Error while trying to
                make a submit!
              </Alert>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
