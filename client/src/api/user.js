import axios from './axios';
import qs from 'query-string';

export default {

  create(body) {
    console.log(body);
    return axios.put('./user', qs.stringify(body), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  },

  whoAmI() {
    return axios.get('./whoami');
  },
  uploadImage(body) {
    const formData = new FormData();
    formData.append('name', body.name);
    formData.append('format', body.format);
    formData.append('image', body.image);

    return axios.post('./image',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
  },

  edit(body) {
    return axios.post(`./user?id=${body._id}`, qs.stringify(body), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
};
