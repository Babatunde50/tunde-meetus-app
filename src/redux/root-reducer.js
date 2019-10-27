import {combineReducers} from 'redux'

import meetupReducer from './meetup/meetup.reducer';

const rootReducer = combineReducers({
    meetup: meetupReducer
})

export default rootReducer;