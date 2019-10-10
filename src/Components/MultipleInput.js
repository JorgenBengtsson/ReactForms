import React, { Component } from "react";

export default class MultipleInput extends Component {
  constructor() {
    super();
    this.state = { cb1: true, cb2: false, textValue: "Some Text!!!" };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <>
        <label>
          CheckBox 1
          <input
            name="cb1"
            type="checkbox"
            checked={this.state.cb1}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Checkbox 2
          <input
            name="cb2"
            type="checkbox"
            checked={this.state.cb2}
            onChange={this.handleInputChange}
          />
        </label>
        <input
          name="textValue"
          type="text"
          value={this.state.textValue}
          onChange={this.handleInputChange}
        />
      </>
    );
  }
}
