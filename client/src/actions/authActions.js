import axios from 'axios';


export const FETCH_USER = "FETCH_USER";

export const fetchUser = () => {
    return dispatch => {
        axios.get('/api/auth/current_user').then(res => {
            dispatch({
                type: FETCH_USER,
                payload: res.data
            });
        });
    }
};

export const logoutUser = () => {
    return dispatch => {
        axios.get('/api/auth/logout').then(res => {
            dispatch({
                type: FETCH_USER,
                payload: res.data
            });
        })
    }
};