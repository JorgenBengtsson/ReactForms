import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", essay: "" };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEssay = this.handleChangeEssay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeEssay(event) {
    this.setState({ essay: event.target.value });
  }

  handleSubmit(event) {
    alert("A form was submitted: " + this.state.name + " " + this.state.essay);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
          <Row>
            <Col xs={1}>Name:</Col>
            <Col xs={2}>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={1}>Essay:</Col>
            <Col xs={2}>
              <textarea
                value={this.state.value}
                onChange={this.handleChangeEssay}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="submit" value="Submit" />
            </Col>
          </Row>
        </Container>
      </form>
    );
  }
}
