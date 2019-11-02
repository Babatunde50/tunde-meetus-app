import React, { Component } from "react";
import { connect } from 'react-redux';

import MeetupGrid from "../../components/MeetupGrid/MeetupGrid.component";
import EditMeetup from "../../components/EditMeetup/EditMeetup.component";
import Button from "../../components/UI/Button/Button.component";

import "./Homepage.styles.css";

class Homepage extends Component {
  state = {
    showEdit: false,
    meetup: null
  };

  handleCloseEdit = () => {
    this.setState({
      showEdit: false
    });
  };

  handleOpenAdd = () => {
    this.setState({
      showEdit: true
    });
  }

  handleOpenEdit = (id) => {
    this.setState({
      meetup: this.props.meetups.filter(meetup => meetup.id === id)[0],
      showEdit: true
    })

  }

  render() {
    const { showEdit, meetup } = this.state;
    return (
      <main className="homepage">
        <div className="homepage-button">
          <Button type="button" click={this.handleOpenAdd}>
            {" "}
            Add Meetup{" "}
          </Button>
        </div>
        <MeetupGrid openAdd={this.handleOpenAdd} openEdit={this.handleOpenEdit} />
        {showEdit && <EditMeetup meetup={meetup} closeEdit={this.handleCloseEdit} />}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetup.meetups
})

export default connect(mapStateToProps)(Homepage)