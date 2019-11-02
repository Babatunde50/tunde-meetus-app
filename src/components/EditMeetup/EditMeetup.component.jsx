import React, { Component } from "react";
import { connect } from "react-redux";

import "./EditMeetup.styles.css";

import Button from "../UI/Button/Button.component";
import TextInput from "../UI/TextInput/TextInput.component";
import Modal from "../UI/Modal/Modal.component";
import { isNotEmpty, isValidEmail } from "../../helpers/validate";
import { saveMeetup } from "../../redux/meetup/meetup.actions";

class EditMeetup extends Component {
  state = {
    title: "",
    subtitle: "",
    address: "",
    email: "",
    description: "",
    imageUrl: "",
    imageUrlValid: false,
    titleValid: false,
    subtitleValid: false,
    addressValid: false,
    emailValid: false,
    descriptionValid: false
  };

  componentDidMount() {
    if (!this.props.meetup) return;
    this.meetup = {...this.props.meetup}
    const {
      title,
      subtitle,
      address,
      description,
      contactEmail,
      imageUrl
    } = this.meetup;
    this.setState(
      {
        title,
        subtitle,
        address,
        imageUrl,
        description,
        email: contactEmail,
        imageUrlValid: true,
        titleValid: true,
        subtitleValid: true,
        addressValid: true,
        emailValid: true,
        descriptionValid: true
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state);
  }

  componentWillUnmount() {
    this.meetup = null;
    // console.log(this.state)
    // this.setState({
    //   title: "",
    //   subtitle: "",
    //   address: "",
    //   email: "",
    //   description: "",
    //   imageUrl: "",
    //   imageUrlValid: false,
    //   titleValid: false,
    //   subtitleValid: false,
    //   addressValid: false,
    //   emailValid: false,
    //   descriptionValid: false
    // }, () => {
    //   console.log(this.state);
    // });
  }

  handleChange = event => {
    const inputName = event.target.name;
    let validate = isNotEmpty;
    if (inputName === "email") validate = isValidEmail;
    const validity = inputName + "Valid";
    console.log(this.state);
    this.setState({
      [inputName]: event.target.value,
      [validity]: validate(event.target.value)
    });
  };

  handleSubmit = () => {
    const {
      title,
      subtitle,
      address,
      description,
      email,
      imageUrl
    } = this.state;
    const meetupData = {
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail: email
    };
    this.props.saveMeetup(meetupData);
    this.props.closeEdit();
  };

  render() {
    const {
      title,
      subtitle,
      address,
      email,
      description,
      imageUrl,
      titleValid,
      subtitleValid,
      addressValid,
      emailValid,
      imageUrlValid,
      descriptionValid
    } = this.state;

    let { closeEdit } = this.props;
    const valid =
      titleValid &&
      subtitleValid &&
      addressValid &&
      emailValid &&
      descriptionValid;
    return (
      <Modal
        title="Edit Meetup Data"
        handleClose={closeEdit}
        footer={
          <Button disabled={!valid} type="button" click={this.handleSubmit}>
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
            id="imageUrl"
            valid={imageUrlValid}
            validityMessage="Please enter a valid image URL"
            label="Image URL"
            value={imageUrl}
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

const mapDispatchToProps = dispatch => ({
  saveMeetup: meetupData => dispatch(saveMeetup(meetupData))
});

export default connect(
  null,
  mapDispatchToProps
)(EditMeetup);
