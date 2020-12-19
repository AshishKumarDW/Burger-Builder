import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5c7cb.firebaseio.com/'
});

export default instance;