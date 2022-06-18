import axios from 'axios';

const googleApi = axios.create({
  baseURL: `https://www.googleapis.com/books/v1/`,
});

export default googleApi;
