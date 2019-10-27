import React, { Component } from "react";

import "./EditMeetup.styles.css";

import Button from "../UI/Button/Button.component";
import TextInput from "../UI/TextInput/TextInput.component";
import Modal from "../UI/Modal/Modal.component";
import { isNotEmpty, isValidEmail } from "../../helpers/validate";

export default class componentName extends Component {
  state = {
    title: "",
    subtitle: "",
    address: "",
    email: "",
    description: "",
    titleValid: false,
    subtitleValid: false,
    addressValid: false,
    emailValid: false,
    descriptionValid: false
  };

  handleChange = event => {
    const inputName = event.target.name;
    let validate = isNotEmpty;
    if (inputName === "email") validate = isValidEmail;
    const validity = inputName + "Valid";

    this.setState(
      {
        [inputName]: event.target.value,
        [validity]: validate(event.target.value)
      }
    );
  };

  render() {
    const {
      title,
      subtitle,
      address,
      email,
      description,
      titleValid,
      subtitleValid,
      addressValid,
      emailValid,
      descriptionValid
    } = this.state;

    let { closeEdit } = this.props
    const valid = titleValid && subtitleValid && addressValid && emailValid && descriptionValid;
    return (
      <Modal
        title="Edit Meetup Data"
        handleClose={closeEdit}
        footer={
          <Button disabled={!valid} type="button" onClick={this}>
            {" "}
            Save{" "}
          </Button>
        }
      >
        <form>
          <TextInput
            id="title"
            valid={titleValid}
            validityMessage="Please enter a valid title."
            label="Title"
            value={title}
            handleChange={this.handleChange}
          />
          <TextInput
            id="subtitle"
            valid={subtitleValid}
            validityMessage="Please enter a valid subtitle."
            label="Subtitle"
            value={subtitle}
            handleChange={this.handleChange}
          />
          <TextInput
            id="address"
            valid={addressValid}
            validityMessage="Please enter a valid address."
            label="Address"
            value={address}
            handleChange={this.handleChange}
          />
          <TextInput
            id="email"
            valid={emailValid}
            validityMessage="Please enter a valid E-Mail Address."
            label="E-Mail"
            value={email}
            handleChange={this.handleChange}
          />
          <TextInput
            id="description"
            valid={descriptionValid}
            validityMessage="Please enter a valid description."
            label="Description"
            value={description}
            handleChange={this.handleChange}
            controlType="textarea"
          />
        </form>
      </Modal>
    );
  }
}
