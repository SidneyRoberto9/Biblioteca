import axios from 'axios';

const googleApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

export default googleApi;
