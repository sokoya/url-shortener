import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.shrtco.de/v2'});
//shorten
API.interceptors.request.use((req) => {
    // headers not required...
    return req;
});

export const getShortUrls = (text) => API.get(`/shorten?url=${text}`);