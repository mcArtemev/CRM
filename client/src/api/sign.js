import axios from './axios';
import qs from 'query-string';

export default {
  create(body) {
    return axios.post('./user', qs.stringify(body), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  },
  signIn(body) {
    return axios.post('./sign-in', qs.stringify(body), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  },

  signOut() {
    return axios.delete('./sign-out');
  }
};
