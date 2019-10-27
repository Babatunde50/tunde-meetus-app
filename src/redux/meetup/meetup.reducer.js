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

const meetupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case meetupActionTypes.SET_INITIAL_MEETUPS:
      return {
        ...state,
        meetups: transformData(action.payload.meetups)
      };
    default:
      return state;
  }
};

export default meetupReducer;
