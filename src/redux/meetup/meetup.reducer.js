import { meetupActionTypes } from "./meetup.types";

const INITIAL_STATE = {
  meetups: []
};

const transformData = data => {
  const loadedMeetups = [];
  for (const key in data) {
    loadedMeetups.push({
      ...data[key],
      id: key
    });
  }
  return loadedMeetups;
};

const addMeetup = (meetups, meetup) => {
  return meetups.concat(meetup).reverse();
}

const meetupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case meetupActionTypes.SET_INITIAL_MEETUPS:
      return {
        ...state,
        meetups: transformData(action.payload.meetups)
      };
    case meetupActionTypes.ADD_NEW_MEETUP:
      return {
        ...state,
        meetups: addMeetup(state.meetups, action.payload.meetup)
      }
    default:
      return state;
  }
};

export default meetupReducer;
