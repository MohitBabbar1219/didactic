import {FETCH_USER} from './../actions/authActions';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            console.log(action.payload || false);
            return {...state, userDetails: action.payload || false};
        default:
            return {...state};
    }
}