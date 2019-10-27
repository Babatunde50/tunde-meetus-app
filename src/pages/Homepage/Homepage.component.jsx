import React, { Component } from "react";

import MeetupGrid from "../../components/MeetupGrid/MeetupGrid.component";
import EditMeetup from "../../components/EditMeetup/EditMeetup.component";
import Button from "../../components/UI/Button/Button.component";

import "./Homepage.styles.css";

export default class Homepage extends Component {
  state = {
    showEdit: false
  };

  handleCloseEdit = () => {
    this.setState({
      showEdit: false
    });
  };

  render() {
    const { showEdit } = this.state;
    return (
      <main className="homepage">
        <div className="homepage-button">
          <Button type="button" click={() => this.setState({ showEdit: true })}>
            {" "}
            Add Meetup{" "}
          </Button>
        </div>
        <MeetupGrid />
        {showEdit && <EditMeetup closeEdit={this.handleCloseEdit} />}
      </main>
    );
  }
}
