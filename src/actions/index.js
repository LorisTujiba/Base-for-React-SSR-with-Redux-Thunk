import axios from 'axios';

import { FETCH_ARTICLES } from '../constants/types';

const receiveCharacters = (payload) => {
  return {
    type: FETCH_ARTICLES,
    payload
  };
}

export function fetch_articles() {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        console.log('Response',response)
        dispatch(receiveCharacters(response.data));
      })
      .catch((error) => {
        console.warn("error", error);
      });
  };
};
