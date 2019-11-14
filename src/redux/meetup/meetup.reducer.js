import { meetupActionTypes } from "./meetup.types";

const INITIAL_STATE = {
  meetups: [],
  isLoading: false,
  errorMessage: ''
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

const toggleFav = (meetups, id, fav) => {
  const updatedMeetups = meetups.map(meetup => {
    if(meetup.id === id) {
      return {
        ...meetup,
        isFavorite: fav
      }
    }
    return meetup;
  })
  console.log(updatedMeetups, 'toggleFav Reducer');
  return updatedMeetups;
}

const meetupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case meetupActionTypes.SET_INITIAL_MEETUPS:
      return {
        ...state,
        meetups: transformData(action.payload.meetups),
        isLoading: false
      };
    case meetupActionTypes.START_FETCHING:
        return {
          ...state,
          isLoading: true 
        };
    case meetupActionTypes.FETCHING_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage
      }
    case meetupActionTypes.ADD_NEW_MEETUP:
      return {
        ...state,
        meetups: addMeetup(state.meetups, action.payload.meetup),
        isLoading: false
      };
    case meetupActionTypes.TOGGLE_FAVOURITE:
      console.log(action.payload);
      return {
        ...state,
        meetups: toggleFav(state.meetups, action.payload.id, action.payload.isFav ),
        isLoading: false
      }
    default:
      return state;
  }
};

export default meetupReducer;
