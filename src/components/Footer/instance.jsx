import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bubblecleaning-7c87c-default-rtdb.firebaseio.com/'
})
export default instance