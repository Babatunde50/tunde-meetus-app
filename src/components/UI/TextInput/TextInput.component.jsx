import React, { Component } from "react";

import './TextInput.styles.css';

export default class TextInput extends Component {
  state = {
    touched: false
  };

  handleBlur = () => {
    this.setState({ touched: true });
  };

  render() {
    const {
      id,
      label,
      controlType,
      rows,
      value,
      valid,
      type = 'text',
      validityMessage,
      handleChange
    } = this.props;
    const { touched } = this.state;
    return (
      <div className="form-control">
        <label htmlFor={id}> {label} </label>
        {controlType ? (
          <textarea
            id={id}
            rows={rows}
            value={value}
            name={id}
            className={(!valid && touched) ? "invalid" : null }
            onBlur={this.handleBlur}
            onChange={handleChange}
          ></textarea>
        ) : (
          <input
            type={type}
            className={(!valid && touched) ? "invalid" : null}
            id={id}
            name={id}
            rows={rows}
            value={value}
            onChange={handleChange}
            onBlur={this.handleBlur}
          />
        )}
        { (validityMessage && !valid && touched) && (
          <p class="error-message"> {validityMessage} </p>
        )}
      </div>
    );
  }
}
