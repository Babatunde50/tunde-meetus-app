import React from "react";
import { connect } from "react-redux";

import MeetupItem from "../MeetupItem/MeetupItem.component";

import "./MeetupGrid.styles.css";

const MeetupGrid = ({ meetups, openEdit, openAdd }) => {
  return (
    <div className="meetups">
      {meetups.map(meetup => (
        <MeetupItem
          key={meetup.id}
          {...meetup}
          openAdd={openAdd}
          openEdit={openEdit}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  meetups: state.meetup.meetups
});

export default connect(mapStateToProps)(MeetupGrid);
