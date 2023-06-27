import axios from 'axios';

const instance = axios.create({
  baseURL:"http://api.themoviedb.org/3",
  params: {
    api_key:"e85c2030643ec8d9010504c42d3720ae",
    language: "ko-KR",
  },
});

export default instance;