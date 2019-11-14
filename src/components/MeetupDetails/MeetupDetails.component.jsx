import React from "react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Button from '../UI/Button/Button.component';

import './MeetupDetails.styles.css'

class MeetupDetails extends React.Component {
  componentDidMount() {
    console.log('[Details] Mounts')
  }
    render() {
        const { meetups, match } = this.props
        const selectedMeetup = meetups.find(meetup => meetup.id === match.params.id);
        console.log(selectedMeetup)
        return (
            <div className="meetup-details">
              <section>
                <div className="image">
                  <img src={selectedMeetup.imageUrl} alt={selectedMeetup.title} />
                </div>
                <div className="content">
                  <h1> {selectedMeetup.title} </h1>
                  <h2>
                  {selectedMeetup.subtitle}
                  </h2>
                  <p>{selectedMeetup.description}</p>
                  <Button href="mailto:{selectedMeetup.contactEmail}">Contact</Button>
                  <Button
                    href="/"
                    mode="outline"
                  >
                    Close
                  </Button>
                </div>
              </section>
            </div>
          );
    }
} 

const mapStateToProps = state => ({
    meetups: state.meetup.meetups
})

export default connect( mapStateToProps )(withRouter(MeetupDetails));