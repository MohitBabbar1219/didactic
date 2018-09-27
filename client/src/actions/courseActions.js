import axios from "axios";

export const FETCH_COURSES = "FETCH_COURSES";
export const COURSE_DATA = "COURSE_DATA";

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

export const fetchCoursesByCategory = (cat, pgNum) => {
    return dispatch => {
        axios.get('/api/course/category/' + cat + '/' + pgNum).then(res => {
            dispatch({
                type: FETCH_COURSES,
                payload: res.data
            });
        });
    }
};

export const fetchSpecificCourse = (title) => {
    return dispatch => {
        axios.get('/api/course/' + encodeURI(title)).then(res => {
            dispatch({
                type: COURSE_DATA,
                payload: res.data
            });
        })
    }
};

export const setCourseDataNull = () => {
    return dispatch => {
        dispatch({
            type: COURSE_DATA,
            payload: null
        });
    }
};