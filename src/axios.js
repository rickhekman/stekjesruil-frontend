import axios from 'axios'

if (process.env.DATABASE_URL) {
Axios.defaults.baseURL = process.env.DATABASE_URL;
}

const instance = axios.create({
  // baseURL: 'http://localhost:4000'
  baseURL: 'https://stekjesruil.herokuapp.com/' 
});

export default instance
