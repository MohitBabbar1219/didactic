import { FETCH_COURSES } from './../actions/courseActions';
import {FETCH_USER} from "../actions/authActions";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            console.log(action.payload || false);
            window.scrollTo(0, 0);
            return {...state, courses: action.payload || false};
        default:
            return {...state};
    }
}