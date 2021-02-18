import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burguer-builder-11cd1-default-rtdb.firebaseio.com/'
});

export default instance;