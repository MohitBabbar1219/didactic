import axios from "axios";

export const FETCH_COURSES = "FETCH_COURSES";

export const fetchCourses = (pageNum) => {
    return dispatch => {
        axios.get('/api/course/page/' + pageNum.toString()).then(res => {
            dispatch({
                type: FETCH_COURSES,
                payload: res.data
            });
        });
    }
};

export const emptyCurrentCourses = () => {
    return dispatch => {
        dispatch({
            type: FETCH_COURSES,
            payload: null
        });
    }
};