import axios from 'axios';
import { meetupActionTypes } from './meetup.types'

export const setInitialMeetups = (meetups) => ({
    type: meetupActionTypes.SET_INITIAL_MEETUPS,
    payload: {
        meetups
    }
})

export const fetchMeetups = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://svelte-fa4ee.firebaseio.com/meetups.json');
            dispatch(setInitialMeetups(response.data))
        } catch(error) {
            console.log(error);
        }
    }
}