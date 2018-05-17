import {
    FETCH_ARTICLES,
} from '../constants/types';

export function articles(state = {}, action) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return action.payload;
        default:
            return state;
    }
}
