import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://big-game-survey-backend.herokuapp.com/',
});

export default Axios;
