import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://create-my-burger.firebase.com/'
});

instance.interceptors.request.use((requestConfig) => {
    console.log('REQUEST', requestConfig);
    return requestConfig;
})
instance.interceptors.response.use((response) => {
    console.log('RESPONSE', response);
    return response;
})

export default instance;