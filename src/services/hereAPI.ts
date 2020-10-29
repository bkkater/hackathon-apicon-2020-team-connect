import axios from 'axios';

const hereAPI = axios.create({
    baseURL: 'https://revgeocode.search.hereapi.com/v1'
})

export default hereAPI;