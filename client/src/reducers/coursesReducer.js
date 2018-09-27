import { FETCH_COURSES, COURSE_DATA } from './../actions/courseActions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_COURSES:
            console.log(action.payload || false);
            window.scrollTo(0, 0);
            return {...state, courses: action.payload || false};
        case COURSE_DATA:
            console.log(action.payload || false);
            return {...state, courseData: action.payload || false};
        default:
            return {...state};
    }
}