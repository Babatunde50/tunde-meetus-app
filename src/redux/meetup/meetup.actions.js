import axios from 'axios';
import { meetupActionTypes } from './meetup.types'

export const startFetching = () => ({
    type: meetupActionTypes.START_FETCHING
})

export const fetchingFailed = (errorMessage) => ({
    type: meetupActionTypes.FETCHING_FAILED,
    payload: {
        errorMessage
    }
})

export const setInitialMeetups = (meetups) => ({
    type: meetupActionTypes.SET_INITIAL_MEETUPS,
    payload: {
        meetups
    }
})

export const addNewMeetup = (meetup) => ({
    type: meetupActionTypes.ADD_NEW_MEETUP,
    payload: {
        meetup
    }
})

export const toggleFavourite = (id, isFav ) => ({
    type: meetupActionTypes.TOGGLE_FAVOURITE,
    payload: {
        id,
        isFav
    }
})

export const fetchMeetups = () => {
    return async (dispatch) => {
        try {
            dispatch(startFetching())
            const response = await axios.get('https://svelte-fa4ee.firebaseio.com/meetups.json');
            dispatch(setInitialMeetups(response.data))
        } catch(error) {
            console.log(error)
            dispatch(fetchingFailed(error.message))
        }
    }
}

export const saveMeetup = (meetupData) => {
    return async (dispatch) => {
        try {
            dispatch(startFetching())
            const response = await axios.post('https://svelte-fa4ee.firebaseio.com/meetups.json', meetupData);
            dispatch(addNewMeetup({...meetupData, isFavorite: false, id: response.data.name }));
        } catch(error) {
            console.log(error);
            dispatch(fetchingFailed(error.message))
        }
    }
}

export const updateFavourite = (id, isFav) => {
    return async(dispatch) => {
        try {
            //console.log(id, isFav)
            const response = await axios.patch(`https://svelte-fa4ee.firebaseio.com/meetups/${id}.json`, {isFavorite: !isFav })
            console.log(response.data.isFavorite);
            dispatch(toggleFavourite(id, !isFav  ))
        } catch(error) {
            console.log(error)
            dispatch(fetchingFailed(error.message))
        }
    }
}