import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://create-my-burger.firebase.com/'
});

export default instance;