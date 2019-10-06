import React, { Component } from "react";
import "./CoolButton.css";

class CoolButton extends Component {
  render() {
    let type = "button";
    if (this.props.isDanger) {
      type += " is-danger ";
    }
    if (this.props.isSmall) {
      type += " is-small ";
    }
    if (this.props.isSuccess) {
      type += " is-success ";
    }
    if (this.props.isPrimary) {
      type += " is-primary ";
    }
    if (this.props.className) {
      type += this.props.className;
    }

    return (
      <div className="CoolButton">
        <button className={type}>{this.props.children}</button>
      </div>
    );
  }
}

export default CoolButton;

// <!-- What is rendered in the DOM -->
// <button class="button is-rounded my-class is-danger is-small">Button 1</button>
// <button class="button is-small is-success">Button 2</button>
